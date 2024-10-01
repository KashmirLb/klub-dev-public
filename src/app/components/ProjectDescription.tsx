"use client"

import { useEffect, useState } from "react"
import { useSpring, useTransition, animated, useSpringRef } from "@react-spring/web"
import useStore from "../stores/store"
import { loopArray } from "../helpers"

const ProjectDescription = () => {

    const [aboutSelected, setAboutSelected] = useState(true)
    const transitionApi = useSpringRef()
    const indexProjectSelected = useStore((state) => state.indexProjectSelected)
    const colors = useStore((state) => state.colors)
    const gradientColors = loopArray(colors, indexProjectSelected)
    const projects = useStore((state) => state.projects)

    const [ spring, api ] = useSpring(() => ({
        from: { x: 0, width: 96, backgroundImage: `linear-gradient(40deg, ${gradientColors[0]} 33%, ${gradientColors[1]} 66%, ${gradientColors[2]})` },
        config: { mass: 15, tension: 100, friction: 50 },
    }))

    const descriptionComponents = [projects[indexProjectSelected].tech, projects[indexProjectSelected].about]

    const [ transitions, transitionsApi ] = useTransition( descriptionComponents[aboutSelected ? 1 : 0], () => ({
        from: {
          clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
          opacity: 0
        },
        enter: {
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
          opacity: 1
        },
        leave: {
          clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
          opacity: 0
        },
        onRest: () => {
          transitionApi.stop()
        },
        ref: transitionApi,
        exitBeforeEnter: true,
    }))


    const infoClicked = () => {

        api.start({ 
            x: 0, 
            width: 96,
            backgroundImage: `linear-gradient(40deg, ${gradientColors[0]} 33%, ${gradientColors[1]} 66%, ${gradientColors[2]})`,
            config: { mass: 20, tension: 100, friction: 50 },
        })
        setAboutSelected(true)
    }

    const techClicked = () => {
        api.start({
            x: 124,
            width: 76,
            backgroundImage: `linear-gradient(220deg, ${gradientColors[0]} 33%, ${gradientColors[1]} 66%, ${gradientColors[2]})`,
            config: { mass: 20, tension: 100, friction: 50 },
        })
        setAboutSelected(false)
    }

    useEffect(() => {
        if(transitions != null){
            transitionApi.start()
        }
    }, [transitions, aboutSelected])

    useEffect(() => {
        infoClicked()
    }, [indexProjectSelected])

  return (
    <div className="flex flex-col gap-4">
        <div className="flex">
            <div className='fluid-button-container relative overflow-clip '>
                <animated.div className="absolute h-full rounded-full"
                    style={spring}
                >
                </animated.div>
                <div className="fluid-button-wrapper">
                    <div className="fluid-button">
                        <div className="fluid-button-cover button-cover-1-1"></div>
                        <div className="fluid-button-cover button-cover-1-2"></div>
                        <div className="fluid-button-cover button-cover-2"></div>
                        <span className={`text-white font-bold w-[96px] h-full flex justify-center items-center rounded-2xl hover:cursor-pointer
                        ${!aboutSelected ? "hover:bg-slate-700 " : ""}
                        
                        `}                 onClick={infoClicked}
                        >Info</span>
                    </div>
                    <div className="fluid-button">
                        <div className="fluid-button-cover button-cover-3"></div>
                        <div className="fluid-button-cover button-cover-4-1"></div>
                        <div className="fluid-button-cover button-cover-4-2"></div>
                        <span className={`text-white font-bold w-[74px] h-full flex justify-center items-center rounded-2xl hover:cursor-pointer
                        ${aboutSelected ? "hover:bg-slate-700 " : ""}
                        
                        `} onClick={techClicked}
                        >
                            Tech
                        </span>
                        
                    </div>
                    <div className="fluid-coverer coverer-top"></div>
                    <div className="fluid-coverer coverer-bottom"></div>
                </div>
            </div>
        </div>
        <div className="bg-slate-950 w-full min-h-12 rounded-xl p-4 text-slate-200"
        >
            {
                transitions( (spring, item) => (
                    <animated.div
                        style={{
                            ...spring,
                        }}
                    >
                        {item}
                    </animated.div>
                ))
            } 
        </div>
    </div>
  )
}

export default ProjectDescription