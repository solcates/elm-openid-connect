module App.Startpage exposing (..)

import App.Page exposing (Page)
import App.Startpage.Svg.DataTable as DataTableSvg
import App.Url exposing (Url(..))
import Html exposing (Html, text)
import Html.Attributes exposing (href)
import Material
import Material.ImageList as ImageList
import Material.Options exposing (attribute, cs, css, id, styled)


type alias Model m =
    { mdc : Material.Model m
    }


defaultModel : Model m
defaultModel =
    { mdc = Material.defaultModel
    }


type Msg m
    = Mdc (Material.Msg m)


update : (Msg m -> m) -> Msg m -> Model m -> ( Model m, Cmd m )
update lift msg model =
    case msg of
        Mdc msg_ ->
            ( model, Cmd.none )


view : (Msg m -> m) -> Page m -> Model m -> Html m
view lift page model =
    styled Html.div
        []
        [ page.topappbar "EKMS"
        , styled Html.nav
            []
            [ ImageList.view
                [ id "catalog-image-list" ]
                (List.map
                    (\{ url, title, subtitle, icon } ->
                        ImageList.item
                            []
                            [ styled Html.a
                                [ attribute (href (App.Url.toString url))
                                , css "text-decoration" "none"
                                ]
                                [ ImageList.imageAspectContainer
                                    [ css "padding-bottom" "100%"
                                    , css "background-color" "#f5f5f5"
                                    ]
                                    [ ImageList.divImage [] [ icon ] ]
                                , ImageList.supporting []
                                    [ ImageList.label
                                        [ cs
                                            "catalog-image-list-label"
                                        ]
                                        [ text title ]
                                    ]
                                ]
                            ]
                    )
                    [ { url = KeyStores
                      , icon = DataTableSvg.view
                      , title = "Keystores"
                      , subtitle = "Keystores Subtitle"
                      }
                    , { url = Instances
                      , icon = DataTableSvg.view
                      , title = "Instances"
                      , subtitle = "Instances Subtitle"
                      }
                    , { url = Keys
                      , icon = DataTableSvg.view
                      , title = "Keys"
                      , subtitle = "Keys Subtitle"
                      }
                    ]
                )
            ]
        ]
