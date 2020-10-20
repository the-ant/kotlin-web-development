@file:JsModule("react-player")
@file:JsNonModule

package player

import kotlinx.css.LinearDimension
import react.RClass
import react.RProps

@JsName("default")
external val reactPlayer: RClass<ReactPlayerProps>

external interface ReactPlayerProps: RProps {
    var url: String
    var playing: Boolean
    var width: LinearDimension
    var height: LinearDimension
    var controls: Boolean
    var pip: Boolean
    var stopOnUnmount: Boolean
    var light: Boolean
    var onEnded: () -> Unit
}
