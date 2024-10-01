"use client"
import { useEffect, useRef, useState } from "react"
import { useSpring, animated } from "react-spring"
import ChangingTextComponent from "./ChangingTextComponent"
import useStore from "../stores/store"
import { loopArray } from "../helpers"

const linearGradientDefault = "linear-gradient(0deg, #94a3b8 0%, #94a3b8 50%, #94a3b8)"

const TimePoint = ({delay, verticalAnimationStarted, text, index, hoveringTimePoint}: {delay?: number, verticalAnimationStarted?: boolean, text: string, index: number, hoveringTimePoint: number}) => {

    const [ animationStarted, setAnimationStarted ] = useState(false)
    const lineRef = useRef<HTMLDivElement>(null)
    const innerCircleRef = useRef<HTMLDivElement>(null)
    const timePointSelected = useStore((state) => state.timePointSelected)
    const colors = useStore((state) => state.colors)

    const [ spring, api ] = useSpring(() => ({
        from: { backgroundImage: "conic-gradient(#94a3b8 0%, transparent 1%, transparent)" },
        config: { duration: 700 },
        delay: 0
    }))

    useEffect(() => {
        if(delay != null && verticalAnimationStarted){
            api.start({
                from: { backgroundImage: "conic-gradient(#94a3b8 0%, transparent 1%, transparent)" },
                to: { backgroundImage: "conic-gradient(#94a3b8 100%, #94a3b8 50%, transparent)" },
                config: { duration: 700 },
                delay: delay,
                onStart: () => {
                    setAnimationStarted(true)
                }
            })

        }
    }, [delay, verticalAnimationStarted])

    useEffect(() => {
        if(hoveringTimePoint != index && hoveringTimePoint != 999 && lineRef.current != null){
            lineRef.current.style.background = linearGradientDefault
        }
        if(hoveringTimePoint == 999 && lineRef.current != null && timePointSelected == text){
            lineRef.current.style.background = loopArray(colors, index)[0]
        }

    }, [hoveringTimePoint, timePointSelected])

    useEffect(() => {
        if(timePointSelected == text){
            api.start({
                to: { backgroundImage: getConicGradient(index) },
                config: { duration: 0 },
            })
            if(lineRef.current != null){
                lineRef.current.style.background = loopArray(colors, index)[0]
            }
            if(innerCircleRef.current != null){
                innerCircleRef.current.style.background = loopArray(colors, index)[0]
            }
        }
        else{
            if(timePointSelected != null && timePointSelected != ""){
                api.start({
                    to: { backgroundImage: "conic-gradient(#94a3b8 100%, #94a3b8 50%, transparent)" },
                    config: { duration: 0 },
                })
                if(lineRef.current != null){
                    lineRef.current.style.background = linearGradientDefault
                }
                if(innerCircleRef.current != null){
                    innerCircleRef.current.style.background = "#020617"
                }
            }
        }

    }, [timePointSelected])

    const mouseHover = () => {
        if(animationStarted){
            api.start({
                to: { backgroundImage: getConicGradient(index) },
                config: { duration: 0 },
            })
            if(lineRef.current != null){
                lineRef.current.style.background = loopArray(colors, index)[0]
            }
        }
    }

    const mouseLeave = () => {
        if(animationStarted && timePointSelected != text){
            api.start({
                to: { backgroundImage: "conic-gradient(#94a3b8 100%, #94a3b8 50%, transparent)" },
                config: { duration: 0 },
            })
            if(lineRef.current != null){
                lineRef.current.style.background = linearGradientDefault
            }
        }
    }

    const getConicGradient = (i : number) => {
        const selectedColorGradient = loopArray(colors, i)
        return `conic-gradient(${selectedColorGradient[0]} 33%, ${selectedColorGradient[0]} 66%, ${selectedColorGradient[0]})`
    }

  return (
    <div className="text-slate-400
         hover:text-slate-100
         flex items-center gap-4 transition-colors 
         hover:cursor-pointer" onMouseEnter={mouseHover} onMouseLeave={mouseLeave}
        >
        <div className="flex items-center">
            <div className="w-12 h-[2px] bg-slate-400" ref={lineRef}></div>
            <animated.div
                style={{
                    ...spring,
                    width: 16,
                    height: 16,
                    borderRadius: 999,
                    padding: 2,
                }}
                className="-rotate-90 relative"
            >
            <div className="bg-slate-950 absolute w-3 h-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                ref={innerCircleRef}
            >
            </div>

            </animated.div>
            <div className={`${timePointSelected == text ? "text-slate-100" : "text-inherit"} pl-4`}>

                { animationStarted ? <ChangingTextComponent text={text} duration={500} /> : <span className="opacity-0">{text}</span> }
            </div>
        </div>
        
    </div>
  )
}

export default TimePoint