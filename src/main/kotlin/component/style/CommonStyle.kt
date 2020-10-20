package component.style

import kotlinx.css.*
import kotlinx.css.properties.border
import styled.StyledBuilder
import styled.css


fun StyledBuilder<*>.labelInputStyle() {
    css {
        fontSize = 16.px
        color = Color("#4A5568")
    }
}

fun StyledBuilder<*>.inputStyle() {
    css {
        height = 50.px
        fontSize = 14.px
        padding(17.px, 20.px)
        outline = Outline.none
        color = Color("#2D3748")
        boxSizing = BoxSizing.borderBox
        border(1.px, BorderStyle.solid, Color("#E8E8E8"), 5.px)
    }
}

fun StyledBuilder<*>.buttonStyle() {
    css {
        width = 347.px
        height = 50.px
        border = "none"
        color = Color.white
        borderRadius = 5.px
        outline = Outline.none
        backgroundColor = Color("#04C45C")
    }
}

fun StyledBuilder<*>.smallIconStyle() {
    css {
        width = 24.px
        height = 24.px
    }
}

fun StyledBuilder<*>.rowSpaceBetweenItemsStyle() {
    css {
        display = Display.flex
        flexDirection = FlexDirection.row
        alignItems = Align.center
        justifyContent = JustifyContent.spaceBetween
    }
}

fun StyledBuilder<*>.centerItemsStyle() {
    css {
        display = Display.flex
        alignItems = Align.center
        justifyContent = JustifyContent.center
    }
}

fun StyledBuilder<*>.rowItemsStyle() {
    css {
        display = Display.flex
        flexDirection = FlexDirection.row
    }
}

fun StyledBuilder<*>.rowItemsWithCenterVerticalStyle() {
    css {
        rowItemsStyle()
        alignItems = Align.center
    }
}

fun StyledBuilder<*>.columnItemsStyle() {
    css {
        display = Display.flex
        flexDirection = FlexDirection.column
    }
}
