module OpenIDConnect exposing
    ( Token, tokenRaw, tokenData, parseToken, showToken
    , ParseErr(..), parse, parseWithNonce
    , authorize, newAuth, withScope, withState, withNonce, withParam
    , use
    )

{-| An OpenID Connect implementation


## Token

@docs Token, tokenRaw, tokenData, parseToken, showToken


## Responses

@docs ParseErr, parse, parseWithNonce


## Requests

@docs authorize, newAuth, withScope, withState, withNonce, withParam


## Use

@docs use

-}

import Base64
import Browser.Navigation as Navigation exposing (Key)
import Http
import Json.Decode as JsonD
import String
import Url
import Url.Builder as Builder exposing (QueryParameter)
import Url.Parser
import Url.Parser.Query as Query


{-| Error returned by parsing functions
-}
type ParseErr
    = NoToken
    | Error String
    | OAuthErr ErrorMessage


type ErrCode
    = InvalidRequest
    | UnauthorizedClient
    | AccessDenied
    | UnsupportedResponseType
    | InvalidScope
    | ServerError
    | TemporarilyUnavailable
    | Unknown


type alias ErrorMessage =
    { error : ErrCode
    , errorDescription : Maybe String
    , errorUri : Maybe String
    , state : Maybe String
    }


type alias Authorization =
    { url : String
    , redirectUri : QueryParameter
    , clientID : QueryParameter
    , scope : List String
    , state : Maybe String
    , nonce : Maybe String
    , params : List ( String, String )
    }


type alias AuthorizationResponse =
    { accessToken : String
    , expiresIn : String
    , scope : String
    , tokenType : String
    , idToken : String
    }


{-| Token holder
-}
type Token data
    = Token String data


{-| Use a token to authenticate a request.
-}
use : Token data -> List Http.Header -> List Http.Header
use token =
    (::) (Http.header "Authorization" (showToken token))


{-| Returns the token as a string
-}
showToken : Token data -> String
showToken token =
    "Bearer " ++ tokenRaw token


{-| Returns the data of a Token
-}
tokenData : Token data -> data
tokenData t =
    case t of
        Token token data ->
            data


{-| Returns the raw encoded token as a string
-}
tokenRaw : Token data -> String
tokenRaw t =
    case t of
        Token token _ ->
            token


{-| Map token contents
-}
mapToken : (a -> b) -> Token a -> Token b
mapToken f t =
    case t of
        Token token data ->
            Token token (f data)


{-| Creates a Authorization
-}
newAuth : Url.Url -> Url.Url -> String -> List String -> Authorization
newAuth url redirectUri clientId scope =
    Authorization (Url.toString url) (Builder.string "redirect_uri" (Url.toString redirectUri)) (Builder.string "client_id" clientId) scope Nothing Nothing []


{-| Add a custom scope to a Authorization
-}
withScope : List String -> Authorization -> Authorization
withScope scope auth =
    { auth | scope = List.append auth.scope scope }


{-| Add a custom state to a Authorization
-}
withState : String -> Authorization -> Authorization
withState state auth =
    { auth | state = Just state }


{-| Add a nonce to a Authorization (required)

If omitted, the authorize function will work but the openid-connect
protocol will not be respected.
See <http://openid.net/specs/openid-connect-core-1_0.html#ImplicitAuthRequest>

-}
withNonce : String -> Authorization -> Authorization
withNonce nonce auth =
    { auth | nonce = Just nonce }


{-| Add additional querystring parameters to the authorize url
-}
withParam : String -> String -> Authorization -> Authorization
withParam key value auth =
    { auth | params = ( key, value ) :: auth.params }


{-| Build a Cmd that will redirect to the identity provider

Make sure to use withNonce

-}
authorize : Authorization -> Cmd msg
authorize { url, redirectUri, clientID, scope, state, nonce, params } =
    let
        qs =
            [ clientID
            , redirectUri
            , Builder.string "response_type" "id_token"
            ]

        t =
            qsAddList "scope" scope qs
                |> qsAddMaybe "state" state
                |> qsAddMaybe "nonce" nonce
                |> Builder.toQuery

        fUrl =
            Debug.log "fUrl" (url ++ t)
    in
    Navigation.load fUrl


qsAddList : String -> List String -> List QueryParameter -> List QueryParameter
qsAddList name xs qs =
    let
        list =
            Builder.string name (String.join "," xs)
    in
    List.append qs [ list ]


qsAddMaybe : String -> Maybe String -> List QueryParameter -> List QueryParameter
qsAddMaybe param ms qs =
    case ms of
        Nothing ->
            qs

        Just s ->
            List.append qs [ Builder.string param s ]


parseWithMaybeNonce : Maybe String -> JsonD.Decoder data -> Url.Url -> Result ParseErr (Token data)
parseWithMaybeNonce n decode url =
    let
        murl =
            Debug.log "URL" url

        id_token_parser : Query.Parser (Maybe String)
        id_token_parser =
            Query.string "id_token"

        id_token =
            Url.Parser.parse (Url.Parser.query id_token_parser) murl

        error_parser : Query.Parser (Maybe String)
        error_parser =
            Query.string "error"

        error =
            Url.Parser.parse (Url.Parser.query error_parser) murl
    in
    case ( id_token, error, n ) of
        ( Just id, _, Just nonce ) ->
            let
                parseResult =
                    case id of
                        Nothing ->
                            Result.Err <| Error "Error Parsing Token"

                        Just a ->
                            parseToken decode a

                validateNonce tokenWithNonce =
                    if Tuple.first (tokenData tokenWithNonce) == nonce then
                        Result.Ok <| mapToken Tuple.second tokenWithNonce

                    else
                        Result.Err <| Error "Invalid nonce"
            in
            case parseResult of
                Ok value ->
                    Result.Ok (Debug.log "value" value)

                Err e ->
                    Result.Err <| Error "Error Parsing Results"

        ( Just id, _, Nothing ) ->
            case id of
                Nothing ->
                    Result.Err <| Error "Error Parsing Token"

                Just a ->
                    parseToken decode a

        ( _, Just e, _ ) ->
            case e of
                Nothing ->
                    Result.Err (Error "Unknown Error")

                Just a ->
                    Result.Err (Error a)

        _ ->
            Result.Err NoToken


{-| Extracts a Token from a location and check the incoming nonce
-}
parseWithNonce : String -> JsonD.Decoder data -> Url.Url -> Result ParseErr (Token data)
parseWithNonce nonce data url =
    parseWithMaybeNonce (Just nonce) data url


{-| Extracts a Token from a location
-}
parse : JsonD.Decoder data -> Url.Url -> Result ParseErr (Token data)
parse d u =
    parseWithMaybeNonce Nothing d u


{-| Parse a token
-}
parseToken : JsonD.Decoder data -> String -> Result ParseErr (Token data)
parseToken decode token =
    case String.split "." token of
        [ part0, part1, sign ] ->
            case base64Decode part1 of
                Ok payload ->
                    case JsonD.decodeString decode payload of
                        Ok result ->
                            Ok <| Token token result

                        Err err ->
                            Result.Err (Error "decode payload error")

                Err err ->
                    Result.Err (Error "decode part1 error")

        _ ->
            Result.Err (Error "Invalid id_token")


base64Decode : String -> Result String String
base64Decode data =
    case Base64.decode data of
        Ok result ->
            if String.endsWith "\u{0000}" result then
                Ok <| String.dropRight 1 result

            else
                Ok result

        Result.Err err ->
            Result.Err err


parseError : String -> Maybe String -> Maybe String -> Maybe String -> Result ParseErr a
parseError error errorDescription errorUri state =
    Result.Err <|
        OAuthErr
            { error = errCodeFromString error
            , errorDescription = errorDescription
            , errorUri = errorUri
            , state = state
            }


errCodeFromString : String -> ErrCode
errCodeFromString str =
    case str of
        "invalid_request" ->
            InvalidRequest

        "unauthorized_client" ->
            UnauthorizedClient

        "access_denied" ->
            AccessDenied

        "unsupported_response_type" ->
            UnsupportedResponseType

        "invalid_scope" ->
            InvalidScope

        "server_error" ->
            ServerError

        "temporarily_unavailable" ->
            TemporarilyUnavailable

        _ ->
            Unknown
