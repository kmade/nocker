module Main exposing (..)

import Html exposing (Html, Attribute, text, div, input)
import Html.Attributes exposing (..)
import Html exposing (beginnerProgram)
import Html.Events exposing (onInput)
import Components.KmHello exposing (hello)


main =
    beginnerProgram { model = "Suzana", view = view, update = update }


-- UPDATE


type Msg
    = NewContent String


update (NewContent content) oldContent =
    content


-- VIEW


view content =
    div [  ] [ hello content ]

styles =
    style
        [ ( "width", "100%" )
        , ( "height", "40px" )
        , ( "padding", "10px 0" )
        , ( "font-size", "2em" )
        , ( "text-align", "center" )
        ]
