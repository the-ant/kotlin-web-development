package component

import kotlinx.css.marginLeft
import kotlinx.css.px
import kotlinx.html.js.onClickFunction
import model.Video
import react.*
import styled.css
import styled.styledP

external interface VideoListProps: RProps {
    var videos: List<Video>
    var selectedVideo: Video?
    var onSelectedVideo: (Video) -> Unit
}

external interface VideoListStates: RState {
    var selectedVideo: Video?
}

fun RBuilder.videoList(handler: VideoListProps.() -> Unit): ReactElement {
    return child(VideoList::class) {
        this.attrs(handler)
    }
}

class VideoList : RComponent<VideoListProps, RState>() {

    override fun RBuilder.render() {
        for (video in props.videos) {
            styledP {
                css {
                    marginLeft = 16.px
                }
                key = video.id.toString()
                attrs {
                    onClickFunction = {
                        props.onSelectedVideo(video)
                    }
                }
                if (props.selectedVideo?.id == video.id) {
                    +"☞ "
                }
                +"${video.speaker}: ${video.title}"
            }
        }
    }

}
