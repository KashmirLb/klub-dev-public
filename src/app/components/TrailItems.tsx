"use client"
import { useTrail, animated } from "@react-spring/web"
import useMeasure from "react-use-measure"
import { useEffect, useRef, useState } from "react"
import useOnScreen from "../hooks/useOnScreen"

const TrailItems = () => {

    const [ref, { width }] = useMeasure()
    const [ animationExecuted, setAnimationExecuted ] = useState(false)
    const viewReference = useRef<HTMLDivElement | null>(null)
    const isOnScreen = useOnScreen(viewReference)
    const [ springs, api ] = useTrail(
        3,
        () => ({
            config: { mass: 40, tension: 700, friction: 300 },
            from: { width: 120},
            to: { width: width },
        })
    )

    useEffect(() => {
        if(width > 0 && isOnScreen && !animationExecuted){
            api.start({
                from: { width: 120 },
                to: { width: width },
                config: { mass: 40, tension: 700, friction: 300 },
            })
            setAnimationExecuted(true)
        }
    }, [width, isOnScreen, animationExecuted])

  return (
    <div className="w-full flex flex-col gap-2" ref={(el: HTMLDivElement) => {viewReference.current = el; ref(el)}}>
        {springs.map( (props, index) => (
            <animated.div style={props} key={"prop items" + index} className="text-white bg-black h-16 w-full flex items-center"
            
            >
                Hello World
            </animated.div>
        ))}
        
    </div>
  )
}

export default TrailItems