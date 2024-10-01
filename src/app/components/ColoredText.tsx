"use client"

import { useEffect } from "react"
import { useSpring, animated } from "react-spring"

type ColoredTextProps = {
    text: string,
    color?: string
}

const colorGradient = ({color, deg} : {color: string, deg: number}) => {
    if(color == "purple"){
        return "linear-gradient(" + deg + "deg, #ff43f1 33%, #6e78ff 66%, #008fff)"
    }
    if(color == "green"){
        return 'linear-gradient(' + deg + 'deg, #518071 33%, #00c894 66%, #c8fcea)'
    }
    if(color == "blue"){
        return 'linear-gradient(' + deg + 'deg, #38bdf8 33%, #00d2f3 66%, #00e4db)'
    }
    return 'linear-gradient(' + deg + 'deg, #F87874 33%, #FF9769 66%, #FFBB60)'
}

const ColoredText = (props: ColoredTextProps) => {

    const { text, color = "orange" } = props

    const changeDeg = () => {

        const randomDeg = Math.floor(Math.random() * 360)

        api.start({
            to: { backgroundImage: colorGradient({color: color, deg: randomDeg}) },
            config: { duration: 3000 },
            onRest: () => {
                setTimeout(changeDeg, 1000)
            }
        })
    }

    const [spring, api] = useSpring(() => ({
        from: { backgroundImage: colorGradient({color: color, deg: 40}) },
        config: { duration: 3000 },
        onRest: () => {
            setTimeout(changeDeg, 1000)
        }
    }))

    useEffect(() => {
        changeDeg()
    }, [])



  return (
        <animated.span style={{
            ...spring,
            color: "transparent",
            fontWeight: "bold",
            backgroundClip: "text",
            width: "fit-content",
            }} 
            className='text-transparent font-bold'
            >
                {text}
        </animated.span>
  )
}

export default ColoredText