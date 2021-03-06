import { MotionProps } from "../types"
import { useGestures } from "../../gestures"
import { FunctionalProps, FunctionalComponentDefinition } from "./types"
import { makeHookComponent } from "../utils/make-hook-component"

export const gestureProps = [
    "drag",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "whileTap",
    "whileHover",
    "onHoverStart",
    "onHoverEnd",
]

export const Gestures: FunctionalComponentDefinition = {
    key: "gestures",
    shouldRender: (props: MotionProps) => {
        return gestureProps.some(key => props.hasOwnProperty(key))
    },
    Component: makeHookComponent(({ innerRef, ...props }: FunctionalProps) => {
        useGestures(props, innerRef)
    }),
}
