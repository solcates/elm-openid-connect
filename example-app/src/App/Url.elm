module App.Url exposing
    ( Url(..)
    , fromString
    , fromUrl
    , toString
    )

import Url


type Url
    = StartPage
    | SecretPage
    | Error404 String


toString : Url -> String
toString url =
    let
        u =
            Debug.log "toString" url
    in
    case u of
        StartPage ->
            "#"

        SecretPage ->
            "#secret"

        Error404 requestedHash ->
            requestedHash


fromUrl : Url.Url -> Url
fromUrl url =
    case url.fragment of
        Just "" ->
            Debug.log "jurl:" (fromString (Maybe.withDefault "" url.fragment))

        _ ->
            Debug.log "durl:" (fromString (Maybe.withDefault "" url.fragment))


fromString : String -> Url
fromString url =
    case url of
        "" ->
            StartPage

        "secret" ->
            SecretPage

        _ ->
            Error404 url
