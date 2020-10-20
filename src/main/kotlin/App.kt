
import component.style.*
import component.videoItem
import kotlinx.css.*
import kotlinx.css.properties.border
import model.Video
import player.reactPlayer
import react.*
import react.dom.a
import react.dom.h3
import react.dom.li
import react.dom.ul
import react.router.dom.hashRouter
import react.router.dom.route
import react.router.dom.routeLink
import react.router.dom.switch
import styled.*

val videoList = listOf(
    Video(1, "BIGCITYBOI (Official Music Video)", "BinZ", "https://www.youtube.com/watch?v=jgZkrA8E5do"),
    Video(2, "Thunder", "Imagine Dragons", "https://www.youtube.com/watch?v=fKopy74weus"),
    Video(3, "Girls Like You ft. Cardi B (Official Music Video)", "Maroon 5", "https://www.youtube.com/watch?v=aJOTlE1K90k"),
    Video(4, "CRAZY MAN", "JUSTATEE x PHUONG LY", "https://www.youtube.com/watch?v=HXkh7EOqcQ4"),
    Video(5, "Hoa Nở Không Màu | Acoustic Version", "Hoài Lâm", "https://www.youtube.com/watch?v=y_6aSG2yfe8"),
    Video(6, "Đen - Lối Nhỏ ft. Phương Anh Đào", "Đen", "https://www.youtube.com/watch?v=KKc_RMln5UY"),
    Video(7, "Đen ft. MIN - Bài Này Chill Phết", "Đen", "https://www.youtube.com/watch?v=ddaEtFOsFeM"),
    Video(8, "Đen - Đưa Nhau Đi Trốn ft. Linh Cáo", "Đen", "https://www.youtube.com/watch?v=5e7e_KZINA4"),
    Video(9, "Ai Cho Ai", "FloD", "https://www.youtube.com/watch?v=afNQLlTRvfM"),
    Video(10, "Anh Thương Em Nhất Mà?", "Lã. x Log x TiB", "https://www.youtube.com/watch?v=ZgRNBvSLsRc"),
    Video(11, "Thì Thôi", "Reddy", "https://www.youtube.com/watch?v=Eb8fj-jstNo"),
    Video(12, "1 Phút", "Andiez", "https://www.youtube.com/watch?v=dLQe4qEfVJw"),
    Video(13, "OK", "BINZ", "https://www.youtube.com/watch?v=SNES5Y-tYxM"),
    Video(14, "Ex's Hate Me", "B Ray x Masew (Ft AMEE)", "https://www.youtube.com/watch?v=95ahbau-rJk&list=RD95ahbau-rJk&start_radio=1"),
    Video(15, "Tận Cùng Nỗi Nhớ", "Will x Han Sara", "https://www.youtube.com/watch?v=UOpE-hRFPCo&list=RD95ahbau-rJk&index=6"),
    Video(16, "CHIỀU HÔM ẤY", "JayKii", "https://www.youtube.com/watch?v=SA35ldy92s0&list=RD95ahbau-rJk&index=11"),
    Video(17, "7 Years", "Lukas Graham", "https://www.youtube.com/watch?v=LHCob76kigA"),
    Video(18, "Shape of You", "Ed Sheeran", "https://www.youtube.com/watch?v=JGwWNGJdvx8"),
    Video(19, "Numb", "Linkin Park", "https://www.youtube.com/watch?v=kXYiU_JCYtU"),
    Video(20, "Counting Stars", "OneRepublic", "https://www.youtube.com/watch?v=hT_nvWreIhg"),
    Video(21, "Mirrors", "Justin Timberlake", "https://www.youtube.com/watch?v=uuZE_IRwLNI"),
    Video(22, "Just Give Me A Reason ft. Nate Ruess", "P!nk", "https://www.youtube.com/watch?v=OpQFFLBMEPI"),
    Video(23, "Despacito", "Luis Fonsi", "https://www.youtube.com/watch?v=kJQP7kiw5Fk")
)


external interface AppState : RState {
    var currentVideo: Video?
    var videos: List<Video>
}

class App : RComponent<RProps, AppState>() {

    override fun AppState.init() {
        videos = videoList
        if (currentVideo == null && videos.isNotEmpty()) {
            currentVideo = videoList[0]
        }
    }

    private fun List<Video>.randomVideo(): Video? {
        if (isEmpty()) return null
        val nextIndex = (0 until size).random()
        console.log("next index: $nextIndex")
        return this[nextIndex]
    }

    override fun RBuilder.render() {
        styledDiv {
            css {
                columnItemsStyle()
                width = 100.pct
                height = 100.pct
                margin(0.px)
                padding(0.px)
                backgroundColor = Color("#181818")
            }
            renderAppBar()
            renderContents()
        }
    }

    private fun RBuilder.renderContents() {
        styledDiv {
            css {
                rowItemsStyle()
                width = 100.pct
                height = 100.pct
            }
            renderVideoPlayer()
            renderListVideo()
        }
    }

    private fun RBuilder.renderVideoPlayer() {
        styledDiv {
            css {
                width = 75.pct
                height = 100.pct
                backgroundColor = Color.black
            }
            state.currentVideo?.let { video ->
                console.log("currentVideo: $video")
                reactPlayer {
                    attrs {
                        url = video.url
                        width = 100.pct
                        height = 100.pct
                        controls = true
                        playing = true
                        stopOnUnmount = false
                        onEnded = {
                            setState {
                                val currentIndex = videos.indexOf(video)
                                console.log("reactPlayer - onEnded: $currentIndex")
                                if (currentIndex != -1 && currentIndex + 1 < videos.size) {
                                    currentVideo = videos[currentIndex + 1]
                                } else if (videos.isNotEmpty()) {
                                    currentVideo = videos[0]
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    private fun RBuilder.renderListVideo() {
        styledDiv {
            css {
                width = 25.pct
                height = 100.pct
                overflowY = Overflow.auto
                listStyleType = ListStyleType.none
                backgroundColor = Color("#181818")
                border(1.px, BorderStyle.solid, Color("#313131"))
            }
            for (item in state.videos) {
                styledLi {
                    key = item.id.toString()
                    videoItem {
                        video = item
                        isSelected = item.id == state.currentVideo?.id
                        onSelected = {
                            setState {
                                if (currentVideo?.id != video.id) {
                                    currentVideo = video
                                }
                            }
                        }
                    }
                    styledDiv {
                        css {
                            width = 100.pct
                            height = 1.px
                            backgroundColor = Color("#313131")
                        }
                    }
                }
            }
        }
    }

    private fun RBuilder.renderAppBar() {
        styledDiv {
            css {
                rowSpaceBetweenItemsStyle()
                width = 100.pct
                height = 54.px
                zIndex = 4
                backgroundColor = Color("#202020")
            }
            styledDiv {
                rowItemsWithCenterVerticalStyle()
                styledImg("Menu", "/images/ic_menu.svg") {
                    css {
                        width = 24.px
                        height = 24.px
                        marginLeft = 25.px
                    }
                }
                styledImg("Youtube", "/images/ic_youtube.svg") {
                    css {
                        width = 25.px
                        height = 25.px
                        marginLeft = 25.px
                    }
                }
                styledH4 {
                    css {
                        marginLeft = 4.px
                        color = Color.white
                        fontSize = 20.px
                        fontWeight = FontWeight.w500
                    }
                    +"YOUTUBE"
                }
            }
            styledDiv {
                css {
                    rowSpaceBetweenItemsStyle()
                    width = 640.px
                    height = 30.px
                    border(1.px, BorderStyle.solid, Color("#313131"), 4.px)
                    backgroundColor = Color("#181818")
                }
                styledSpan {
                    css {
                        fontSize = 16.px
                        color = Color("#747474")
                        marginLeft = 15.px
                    }
                    +"Search"
                }
                styledDiv {
                    css {
                        centerItemsStyle()
                        width = 65.px
                        height = 30.px
                        backgroundColor = Color("#313131")
                    }
                    styledImg("Youtube", "/images/ic_search.svg") { smallIconStyle() }
                }
            }
            styledDiv {
                css {
                    rowSpaceBetweenItemsStyle()
                    height = 100.pct
                }
                styledImg("Video call", "/images/ic_video_call.svg") {
                    css {
                        smallIconStyle()
                        marginRight = 24.px
                    }
                }
                styledImg("Applications", "/images/ic_applications.svg") {
                    css {
                        smallIconStyle()
                        marginRight = 24.px
                    }
                }
                styledImg("Notification", "/images/ic_notification.svg") {
                    css {
                        smallIconStyle()
                        marginRight = 24.px
                    }
                }
                styledImg("Avatar", "https://i.pinimg.com/originals/e2/da/00/e2da0012592223fc0de543ef8e94842c.jpg") {
                    css {
                        width = 35.px
                        height = 35.px
                        borderRadius = 18.px
                        marginRight = 25.px
                        objectFit = ObjectFit.cover
                        borderWidth = 1.px
                        borderColor = Color("#313131")
                    }
                }
            }
        }
    }

    private fun RBuilder.routing() {
        hashRouter {
            styledDiv {
                css {
                    display = Display.flex
                    alignItems = Align.center
                    justifyContent = JustifyContent.center
                    backgroundColor = Color.white
                    height = 100.pct
                    width = 100.pct
                }
                ul {
                    li {
                        routeLink("/") { +"Home" }
                    }
                    li {
                        routeLink("/login") { +"login" }
                    }
                    li {
                        routeLink("/register") { +"register" }
                    }
                }
                switch {
                    route("/", strict = true) {
                        a(href = "#/") {
                            +"Back"
                        }
                        h3 { +"Home Page" }
                    }
                    route("/login", strict = true) {
//                        loginScreen {}
//                        child(loginScreen {  }) {}
                        a(href = "#/") {
                            +"Back"
                        }
                        h3 { +"login" }
                    }
                    route("/register", strict = true) {
//                        registerScreen {}
//                        child(registerComponent) {}
                        a(href = "#/") {
                            +"Back"
                        }
                        h3 { +"register" }
                    }
                }
            }
        }
    }

}
