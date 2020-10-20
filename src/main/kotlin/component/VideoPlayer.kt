package component

import component.style.buttonStyle
import kotlinx.css.*
import kotlinx.html.js.onClickFunction
import model.Video
import player.reactPlayer
import react.*
import styled.css
import styled.styledButton
import styled.styledDiv
import styled.styledH3

external interface VideoPlayerProps: RProps {
    var video: Video
    var onWatchedButtonPressed: (Video) -> Unit
    var unwatchedVideo: Boolean
}

fun RBuilder.videoPlayer(handler: VideoPlayerProps.() -> Unit): ReactElement {
    return child(VideoPlayer::class) {
        this.attrs(handler)
    }
}

class VideoPlayer : RComponent<VideoPlayerProps, RState>() {

    override fun RBuilder.render() {
        styledDiv {
            css {
                position = Position.absolute
                top = 10.px
                right = 10.px
                display = Display.flex
                flexDirection = FlexDirection.column
                alignItems = Align.center
                justifyContent = JustifyContent.center
            }
            styledH3 {
                css {
                    color = Color.white
                    backgroundColor = Color.orange
                    paddingTop = 10.px
                    paddingBottom = 10.px
                    paddingLeft = 16.px
                    paddingRight = 16.px
                    textAlign = TextAlign.center
                    borderRadius = 5.px
                }
                +"${props.video.speaker}: ${props.video.title}"
            }
            reactPlayer {
                attrs{
                    url = props.video.url
                    playing = true
                }
            }
            styledButton {
                css {
                    buttonStyle()
                    fontSize = 20.px
                    marginTop = 24.px
                    backgroundColor = if (props.unwatchedVideo) Color("#04C45C") else Color("#2D3748")
                }
                attrs {
                    onClickFunction = {
                        props.onWatchedButtonPressed(props.video)
                    }
                }
                if (props.unwatchedVideo) {
                    +"Mark as watched"
                } else {
                    +"Mark as unwatched"
                }
            }
        }
    }

}
