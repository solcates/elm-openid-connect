module OpenIDConnect exposing
    ( Token, tokenRaw, tokenData, showToken
    , ParseErr(..), parse, parseWithNonce
    , authorize, newAuth, withScope, withState, withNonce, withParam
    , use
    , OAuthConfiguration, discovery, getSub
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
import Json.Decode
import String
import Url
import Url.Builder as Builder exposing (QueryParameter)
import Url.Parser exposing ((<?>))
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


type alias OAuthConfiguration =
    { provider : String
    , authorizationEndpoint : Url.Url
    , tokenEndpoint : Url.Url
    , profileEndpoint : Url.Url
    , clientId : String
    , scope : List String
    , profileDecoder : Json.Decode.Decoder Profile
    }


type alias Profile =
    { name : String
    , picture : String
    }


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


{-| Token holder
-}
type Token data
    = Token String data


type alias Provider =
    { name : String
    , host : String
    }


type Msg m
    = GotDiscoveryResponse (Result Http.Error String)


{-| Discover the OIDC details
-}
discovery : String -> (Result Http.Error String -> msg) -> Cmd msg
discovery h f =
    let
        getDetails hostname function =
            Http.get
                { url = "https://" ++ hostname ++ "/.well-known/openid-configuration"
                , expect = Http.expectString f
                }
    in
    getDetails h f


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

        aUrl =
            url ++ t
    in
    Navigation.load aUrl


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


parseWithMaybeNonce : Maybe String -> Json.Decode.Decoder data -> Url.Url -> Result ParseErr (Token data)
parseWithMaybeNonce n decode url =
    let
        idParser =
            Query.string "id_token"

        errorParser =
            Query.string "error"

        url_ =
            Debug.log "url" url
    in
    case Url.Parser.parse (Url.Parser.top <?> Query.map2 Tuple.pair idParser errorParser) url_ of
        Just ( Just id, _ ) ->
            getSub decode id

        --getIDToken id
        Just ( _, Just error ) ->
            Result.Err (Error error)

        _ ->
            Result.Err NoToken



--
--parseWithMaybeNonce : Maybe String -> JsonD.Decoder data -> Url.Url -> Result ParseErr (Token data)
--parseWithMaybeNonce n decode url =
--    let
--        id_token =
--            Url.Parser.parse (Url.Parser.query (Query.string "id_token")) url
--
--        error =
--            Url.Parser.parse (Url.Parser.query (Query.string "error")) url
--    in
--
--    case ( Debug.log "token" id_token, error, n ) of
--        ( Just id, _, Just nonce ) ->
--            let
--                parseResult : Maybe String -> Result ParseErr (Token data)
--                parseResult i =
--                    case i of
--                        Nothing ->
--                            Result.Err (Error "No Token Found")
--
--                        Just a ->
--                            parseToken decode a
--
--                validateNonce tokenWithNonce =
--                    if Tuple.first (tokenData tokenWithNonce) == nonce then
--                        Result.Ok <| mapToken Tuple.second tokenWithNonce
--
--                    else
--                        Result.Err <| Error "Invalid nonce"
--            in
--            case parseResult id of
--                Result.Ok value ->
--                    Result.Ok (Debug.log "value" value)
--
--                Result.Err a ->
--                    Result.Err (Debug.log "a" a)
--
--        ( Just id, _, Nothing ) ->
--            case id of
--                Just a ->
--                    parseToken decode a
--
--                Nothing ->
--                    Result.Err (Error "Test")
--
--        ( _, Just e, _ ) ->
--            case e of
--                Just a ->
--                    Result.Err (Error a)
--
--                Nothing ->
--                    Result.Err (Error "Unknown Error")
--
--        _ ->
--            Result.Err (Error "Unknown Error")


{-| Extracts a Token from a location and check the incoming nonce
-}
parseWithNonce : String -> Json.Decode.Decoder data -> Url.Url -> Result ParseErr (Token data)
parseWithNonce nonce data url =
    parseWithMaybeNonce (Just nonce) data url


{-| Extracts a Token from a location
-}
parse : Json.Decode.Decoder data -> Url.Url -> Result ParseErr (Token data)
parse d u =
    let
        url =
            { u | path = "/" }
    in
    parseWithMaybeNonce Nothing d url


getUserData : Result ParseErr Profile
getUserData =
    Result.Ok (Profile "test" "test")


{-| Parse a token for an ID (JWT sub)
-}
getSub : Json.Decode.Decoder data -> String -> Result ParseErr (Token data)
getSub decode token =
    case String.split "." token of
        [ part0, part1, sign ] ->
            case base64Decode part1 of
                Ok payload ->
                    case Json.Decode.decodeString decode payload of
                        Ok result ->
                            Ok <| Token token (Debug.log "jwt id_token" result)

                        --Ok <| Bearer token (Debug.log "jwt id_token" result)
                        Err err ->
                            Result.Err (Error "decode payload error")

                Err err ->
                    Result.Err (Error "decode part1 error")

        _ ->
            Result.Err (Error "Invalid id_token")



--getIDToken : String -> Result ParseErr (Token data)
--getIDToken token =
--    Result.Ok token


{-| base64Decode decodes base64 encoded Strings and returns a Result
-}
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
