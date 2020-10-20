package feature

import component.style.buttonStyle
import component.textField
import kotlinx.css.*
import kotlinx.html.InputType
import react.*
import styled.css
import styled.styledButton
import styled.styledDiv
import styled.styledSpan

external interface RegisterProps : RProps {

}

fun RBuilder.registerScreen(handler: RegisterProps.() -> Unit): ReactElement {
    return child(Register::class) {
        this.attrs(handler)
    }
}

fun RBuilder.register() = child(Register::class) {}

class Register : RComponent<RegisterProps, RState>() {

    override fun RBuilder.render() {
        styledDiv {
            css {
                display = Display.flex
                flexDirection = FlexDirection.column
                backgroundColor = Color.white
            }
            styledSpan {
                css {
                    fontSize = 25.px
                    fontWeight = FontWeight.bold
                    color = Color("#1A202C")
                }
                +"Welcome to join with us"
            }
            renderForms()
            styledButton {
                css {
                    buttonStyle()
                    marginTop = 27.px
                    backgroundColor = Color("#2D3748")
                }
                attrs {
                    text("Register now")
                }
            }
        }
    }

    private fun RBuilder.renderForms() {
        styledDiv { css { marginTop = 13.px } }

        // Username
        textField {
            type = InputType.text
            label = "Username"
        }

        // Password
        textField {
            type = InputType.password
            label = "Password"
        }

        // Display Name
        textField {
            type = InputType.text
            label = "Display Name"
        }
    }

}
