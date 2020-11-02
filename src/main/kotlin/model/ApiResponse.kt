package model

import kotlinx.serialization.Serializable

data class ApiResponse<T>(
    val status: Status,
    val data: T
)

@Serializable
data class VideoResponse(
    val status: Status,
    val data: List<Video>
)
