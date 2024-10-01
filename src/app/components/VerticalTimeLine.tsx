"use client"
import { animated, useSpring, useSprings } from "@react-spring/web"
import { useEffect, useRef, useState } from "react"
import { loopArray } from "../helpers"
import useOnScreen from "../hooks/useOnScreen"
import TimePoint from "./TimePoint"
import useStore from "../stores/store"

const DURATION = 2000
const HEIGHT = 80

const VerticalTimeLine = () => {

    const textContainerRef = useRef<HTMLDivElement>(null)
    const allTimePointsRef = useRef<HTMLDivElement[]>([])
    const topCircleRef = useRef<HTMLDivElement>(null)
    const isOnScreen = useOnScreen(textContainerRef)
    const [ loaded, setLoaded ] = useState(false)
    const [ selectedLinearGradient, setSelectedLinearGradient ] = useState("linear-gradient(0deg, #636568 0%, #636568 25%, #636568 50%, #636568 100%)")
    const [ hoveringTimePoint, setHoveringTimePoint ] = useState(999)
    const [ animationEnded, setAnimationEnded ] = useState(false)

    const timePointSelected = useStore((state) => state.timePointSelected)
    const setTimePointSelected = useStore((state) => state.setTimePointSelected)
    const colors = useStore((state) => state.colors)
    const projects = useStore((state) => state.projects)

    const [ spring, api ] = useSpring(() => ({
        from: { height: "0vh", background: "linear-gradient(0deg, #636568 0%, #636568 25%, #636568 50%, #636568 100%)"},
        config: { duration: DURATION}
    }))

    const [springs, springsApi] = useSprings(
        projects.length,
        (i) => ({
            from: { x: -48 },
            config: { duration: 800 },
            delay: ((i + 1) * (DURATION / projects.length)),
        }),
    )

    useEffect(() => {
        if(isOnScreen && loaded == false){
            api.start({
                from: { height: "0vh", background: "linear-gradient(0deg, #636568 0%, #636568 25%, #636568 50%, #636568 100%)" },
                to: { height: HEIGHT + "vh", background: "linear-gradient(0deg, #636568 0%, #636568 25%, #636568 50%, #636568 100%)"},
                config: { duration: DURATION },
                onStart: () => {

                    springsApi.start( (i) => ({
                        from: { x: -48 },
                        to: { x: 0  },
                        config: { duration: 800 },
                        delay: ((i + 1) * (DURATION / springs.length)),
                    }))
                    setLoaded(true)
                },
                onRest: () => {
                    setTimeout(() => {
                        // Add one [springs duration] + [TimePoint circle animation duration] for the last springs animation to end
                        setAnimationEnded(true)
                    }, 1600)
                }
            })
        }
    }, [isOnScreen, loaded])

    useEffect(() => {
        if(timePointSelected != null && timePointSelected != ""){
            const i = projects.findIndex(proj => proj.name == timePointSelected)
            setSelectedLinearGradient(getLinearGradientValue(i))
            if(topCircleRef.current != null){
                topCircleRef.current.style.borderColor = loopArray(colors, i)[2]
            }
        }
    }, [timePointSelected])

    useEffect(() => {
        if(animationEnded){
            setTimePointSelected(projects[projects.length - 1].name)
            onTimePointHover(projects.length - 1)
        }

    }, [animationEnded])

    const onTimePointHover = (i : number) => {

        if(animationEnded){
            const color = getLinearGradientValue(i)
            setHoveringTimePoint(i)
    
            api.start(() => ({
                from: { height: HEIGHT + "vh", background: selectedLinearGradient },
                to: { height: HEIGHT + "vh", background: color },
                config: { duration: 0},
            }))
            if(topCircleRef.current != null){
                topCircleRef.current.style.borderColor = loopArray(colors, i)[2]
            }
        }
    }

    const onTimePointLeave = () => {
        if(animationEnded){
            api.start(() => ({
                to: { height: HEIGHT + "vh", background: selectedLinearGradient },
                config: { duration: 0 },
            }))
            if(topCircleRef.current != null){
                const i = projects.findIndex(proj => proj.name == timePointSelected)
                topCircleRef.current.style.borderColor = loopArray(colors, i)[2]
            }

            setHoveringTimePoint(999)
        }
    }

    const getLinearGradientValue = (i : number) => {

        const percent = (((i+1) * (100 / projects.length)) - 100) * -1
        const selectedColorGradient = loopArray(colors, i)

        return `linear-gradient(0deg, #636568 ${percent}%, ${selectedColorGradient[0]} ${percent + 0.1}%, ${selectedColorGradient[1]} ${percent + ((100 - percent) * 0.3)}%, ${selectedColorGradient[2]} ${(percent + (100 - percent) * 0.6)}%)`
    }

  return (
    <div className="relative min-h-screen w-52 md:w-60">
        <div className="border-2 rounded-full w-4 h-4 border-slate-400" ref={topCircleRef}></div>
        <div className="absolute -top-1 left-8 text-slate-400 z-30"><span className="text-slate-500">[side]</span> Projects </div>
        <div className="absolute top-[60vh]" ref={textContainerRef}></div>
        <div className="pl-[7px]">
            <animated.div style={{
                ...spring,
                paddingLeft: "2px",
                }} 
                    className="animated-vertical-timeline"
                >
                    <div className="w-full h-[calc(100vh-24px)] relative overflow-hidden bg-slate-950">
                        {springs.map((props, i) => (
                            <animated.div style={{
                                ...props,
                                top: `calc(${HEIGHT * ((1/projects.length) * (i + 1))}vh - 13px)`,
                                position: "absolute",
                            }}
                            key={"timePoint-animation" + i}
                            ref={(el: HTMLDivElement) => {
                                if(el != null){
                                    allTimePointsRef.current.push(el)
                                }
                            }}
                            onMouseEnter={() => onTimePointHover(i)}
                            onMouseLeave={() => onTimePointLeave()}
                            onClick={() => setTimePointSelected(projects[i].name)}
                            >
                                <TimePoint delay={((i + 1) * (DURATION / springs.length)) + 800} verticalAnimationStarted={loaded} text={projects[i].name} index={i} hoveringTimePoint={hoveringTimePoint} />
                            </animated.div>
                        ))}
                        
                    </div>
            </animated.div>
        </div>
    </div>
  )
}

export default VerticalTimeLine