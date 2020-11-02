package model

import kotlinx.serialization.Serializable

@Serializable
data class Status(
    val value: Int,
    val description: String
)
