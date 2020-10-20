package component

import component.style.columnItemsStyle
import component.style.rowItemsWithCenterVerticalStyle
import kotlinx.css.*
import kotlinx.html.js.onClickFunction
import model.Video
import player.reactPlayer
import react.*
import styled.css
import styled.styledDiv
import styled.styledP


external interface VideoItemProps : RProps {
    var video: Video
    var isSelected: Boolean
    var onSelected: (Video) -> Unit
}

class VideoItem : RComponent<VideoItemProps, RState>() {

    override fun RBuilder.render() {
        val isSelected = props.isSelected
        val video = props.video

        styledDiv {
            attrs.onClickFunction = {
                props.onSelected(video)
            }
            css {
                rowItemsWithCenterVerticalStyle()
                width = 100.pct
                height = 100.px
                padding(5.px, 10.px)
                backgroundColor = Color(if (isSelected) "#303030" else "#181818")
            }
            styledP {
                css {
                    color = Color(if (isSelected) "#AAAAAA" else "#181818")
                }
                +"▶"
            }
            styledDiv {
                css {
                    width = 175.px
                    height = 100.pct
                    marginLeft = 5.px
                }
                reactPlayer {
                    attrs {
                        url = video.url
                        light = true
                        playing = false
                        controls = false
                        width = 100.pct
                        height = 100.pct
                    }
                }
            }
            styledDiv {
                css {
                    columnItemsStyle()
                    height = 100.pct
                    padding(5.px)
                    marginLeft = 5.px
                }
                styledDiv {
                    css {
                        color = Color.white
                        fontSize = 16.px
                        fontWeight = FontWeight.w500
                        width = 175.px
                    }
                    +video.title
                }
                styledDiv {
                    css {
                        color = Color("#A8A8A8")
                        fontSize = 13.px
                        fontWeight = FontWeight.w500
                        width = 175.px
                    }
                    +video.speaker
                }
            }
        }
    }

}

fun RBuilder.videoItem(handler: VideoItemProps.() -> Unit): ReactElement {
    return child(VideoItem::class) {
        this.attrs(handler)
    }
}
