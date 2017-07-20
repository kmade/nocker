module Components.KmHello exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import String

-- hello component


hello : String -> Html a
hello model =
    div
        [ ]
        [ text ("Hello ")
        , span [ styleName ] [text (model ++ "!") ]
        ]

styleName =
    style
        [ ( "font-weight", "bold" ) ]
