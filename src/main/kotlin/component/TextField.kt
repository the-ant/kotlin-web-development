package component

import component.style.inputStyle
import component.style.labelInputStyle
import kotlinx.css.*
import kotlinx.css.properties.border
import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import org.w3c.dom.events.Event
import react.*
import styled.StyledBuilder
import styled.css
import styled.styledInput
import styled.styledLabel

external interface TextFieldProps : RProps {
    var label: String
    var text: String
    var type: InputType
}

external interface TextFieldState : RState {
    var text: String
}

fun RBuilder.textField(handler: TextFieldProps.() -> Unit): ReactElement {
    return child(TextField::class) {
        this.attrs(handler)
    }
}

class TextField : RComponent<TextFieldProps, TextFieldState>() {

    override fun TextFieldState.init() {
    }

    override fun TextFieldState.init(props: TextFieldProps) {
        text = props.text
    }

    override fun RBuilder.render() {
        styledLabel {
            css {
                marginTop = 11.px
                labelInputStyle()
            }
            +props.label
        }
        styledInput {
            css {
                marginTop = 11.px
                inputStyle()
            }
            attrs {
                type = props.type
                value = state.text
                onChangeFunction = { handleChange(it) }
            }
        }
    }

    private fun handleChange(event: Event) {
        setState {
            text = event.target.unsafeCast<String>()
        }
    }

}
