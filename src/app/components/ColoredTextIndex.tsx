"use client"
import { useSpring, animated } from "@react-spring/web"
import useStore from "../stores/store"
import { loopArray } from "../helpers"

type ColoredTextIndexProps = {
    text: string,
    underline?: boolean,
}

const ColoredTextIndex = (props: ColoredTextIndexProps) => {

    const { text, underline = false } = props
    const colors = useStore((state) => state.colors)
    const indexProjectSelected = useStore((state) => state.indexProjectSelected)
    const color = loopArray(colors, indexProjectSelected)

    const [spring, ] = useSpring(() => ({
        from: { backgroundImage: `linear-gradient(40deg, ${color[0]} 33%, ${color[1]} 66%, ${color[2]})` },
        config: { mass: 30, tension: 100, friction: 800 },
    }))

  return (
        <animated.span style={{
            ...spring,
            color: "transparent",
            fontWeight: "bold",
            backgroundClip: "text",
            width: "fit-content",
            }} 
            className={` transition-all ${underline ? "website-link" : ""}`}
            >
                {text}
        </animated.span>
  )
}

export default ColoredTextIndex