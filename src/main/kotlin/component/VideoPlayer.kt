package component

import kotlinx.css.*
import kotlinx.html.js.onClickFunction
import model.Video
import player.reactPlayer
import react.*
import react.dom.img
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
            styledButton {
                css {
                    display = Display.block
                    backgroundColor = if (props.unwatchedVideo) Color.lightGreen else Color.red
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
            reactPlayer {
                attrs.url = props.video.url
            }
        }
    }

}
