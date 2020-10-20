package feature

import component.style.buttonStyle
import component.textField
import kotlinx.css.*
import kotlinx.html.InputType
import kotlinx.html.js.onClickFunction
import react.*
import styled.css
import styled.styledButton
import styled.styledDiv
import styled.styledSpan

external interface LoginProps : RProps {
    var onFrameChange: (String) -> Unit
}

fun RBuilder.loginScreen(handler: LoginProps.() -> Unit): ReactElement {
    return child(Login::class) {
        this.attrs(handler)
    }
}

fun RBuilder.login() = child(Login::class) {}

class Login : RComponent<LoginProps, RState>() {

    override fun RBuilder.render() {
        styledDiv {
            css {
                display = Display.flex
                flexDirection = FlexDirection.column
                backgroundColor = Color.white
            }
            styledSpan {
                css {
                    fontSize = 16.px
                    color = Color("#2D3748")
                }
                +"Welcome back"
            }
            styledSpan {
                css {
                    fontSize = 25.px
                    fontWeight = FontWeight.bold
                    color = Color("#1A202C")
                }
                +"Login to your account"
            }
            renderForms()
            styledButton {
                css {
                    buttonStyle()
                    marginTop = 27.px
                }
                attrs {
                    text("Login now")
                }
            }
            styledButton {
                css {
                    buttonStyle()
                    marginTop = 15.px
                    backgroundColor = Color("#2D3748")
                }
                attrs {
                    text("Don't have an account? Join free today")
                    onClickFunction = {
                        props.onFrameChange("Register")
                    }
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
    }

}
