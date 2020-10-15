import component.videoList
import component.videoPlayer
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import model.Video
import react.*
import react.dom.div
import react.dom.h1
import react.dom.h3

external interface AppState: RState {
    var currentVideo: Video?
    var unwatchedVideos: List<Video>
    var watchedVideos: List<Video>
}

class App : RComponent<RProps, AppState>() {

    override fun AppState.init() {
        unwatchedVideos = listOf(
                Video(1, "Building and breaking things", "John Doe", "https://youtu.be/PsaFVLr8t4E"),
                Video(2, "The development process", "Jane Smith", "https://youtu.be/PsaFVLr8t4E"),
                Video(3, "The Web 7.0", "Matt Miller", "https://youtu.be/PsaFVLr8t4E")
        )
        watchedVideos = listOf(
                Video(4, "Mouseless development", "Tom Jerry", "https://youtu.be/PsaFVLr8t4E")
        )

        val mainScope = MainScope()
        mainScope.launch {
            val greeting = fetGreeting()
            console.log(greeting)
        }
    }

    override fun RBuilder.render() {
        renderVideoList()
        renderVideoPlayer()
    }

    private fun RBuilder.renderVideoPlayer() {
        state.currentVideo?.let { currentVideo ->
            videoPlayer {
                video = currentVideo
                unwatchedVideo = currentVideo in state.unwatchedVideos
                onWatchedButtonPressed = { video ->
                    if (video in state.unwatchedVideos) {
                        setState {
                            unwatchedVideos -= video
                            watchedVideos += video
                        }
                    } else {
                        setState {
                            watchedVideos -= video
                            unwatchedVideos += video
                        }
                    }
                }
            }
        }
    }

    private fun RBuilder.renderVideoList() {
        h1 { +"Your Video List" }
        div {
            h3 {
                +"Videos to watch"
            }
            videoList {
                videos = state.unwatchedVideos
                selectedVideo = state.currentVideo
                onSelectedVideo = {
                    setState { currentVideo = it }
                }
            }
            h3 {
                +"Videos watched"
            }
            videoList {
                videos = state.watchedVideos
                selectedVideo = state.currentVideo
                onSelectedVideo = {
                    setState { currentVideo = it }
                }
            }
        }
    }

    suspend fun fetGreeting(): User {
        return window.fetch("http://192.168.16.44:8081/")
                .await()
                .json()
                .await()
                .unsafeCast<User>()
    }

}

data class User(val id: Int, val userName: String, val displayName: String)
