package feature

import kotlinx.css.*
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import styled.css
import styled.styledDiv

interface MainFrameProps : RProps {
    var initialView: String
}

interface MainFrameState: RState {
    var view: String
}

class MainFrame(props: MainFrameProps) : RComponent<MainFrameProps, MainFrameState>(props) {

    private val nameToTestMap = hashMapOf(
        "Login" to RBuilder::login,
        "Register" to RBuilder::register,
    )

    override fun MainFrameState.init(props: MainFrameProps) {
        view = props.initialView
    }

    override fun RBuilder.render() {
        styledDiv {
            css {
                display = Display.flex
                alignItems = Align.center
                justifyContent = JustifyContent.center
                backgroundColor = Color.white
                height = 100.pct
                width = 100.pct
            }
            val view = nameToTestMap[state.view]?.invoke(this)?.apply {
            }
        }
    }

}

fun RBuilder.mainFrame(initialView: String) = child(MainFrame::class) {
    attrs.initialView = initialView
}
