"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import useMeasure from "react-use-measure"
import { useTrail, animated } from "react-spring"
import useOnScreen from "../hooks/useOnScreen"


const ImageColumnsWithTrailing = ({images}: {images: string[]}) => {

    const [ minWidthReached, setMinWidhtReached ] = useState<boolean | null>(null)
    const [ totalHeight, setTotalHeight ] = useState(0)
    const [ animationExecuted, setAnimationExecuted ] = useState(false)
    const viewReference = useRef<HTMLDivElement | null>(null)
    const [ref, { width, height }] = useMeasure()

    const isOnScreen = useOnScreen(viewReference)

    
    const [ springs, api ] = useTrail(
        images.length,
        () =>
            ({
                config: { mass: 40, tension: 700, friction: 300 },
                from: { top: 0, left: 0},
                to: { top: minWidthReached ? 0 : totalHeight, left: minWidthReached ? width : 0 },
            })
    )

    useEffect(() => {
        if (width > 0 && height > 0) {
            if(minWidthReached == null){
                setMinWidhtReached(width < (images.length * 100) + 20)
            }
            else{

            }
            if(totalHeight == 0){
                setTotalHeight(height)
            }

            if(totalHeight > 0 && minWidthReached != null && isOnScreen && !animationExecuted){
                api.start({
                    config: { mass: 40, tension: 700, friction: 300 },
                    from: { top: 0, left: 0},
                    to: { top: minWidthReached ? 0 : totalHeight, left: minWidthReached ? width : 0 },
                })
                setAnimationExecuted(true)
            }
        }
    }, [width, height, totalHeight, minWidthReached, isOnScreen, animationExecuted])
    
  return (
    <div className={`w-full flex justify-between gap-5 xs:px-10 py-10 px-2 min-h-[calc(100vh-5rem-120px)] max-h-[calc(100vh-5rem-120px) 
        ${minWidthReached ? "flex-col" : "flex-row"}    
    `} ref={(el: HTMLDivElement) => {viewReference.current = el; ref(el)}}>
        {springs.map((props, index) => (
            <div className={`bg-slate-400 
                ${minWidthReached ?  "w-full min-h-16" : ""} flex flex-1 relative`}
                key={"image" + index + images}
            >
                <Image
                    src={images[index]}
                    alt={images[index]}
                    className="w-full h-full absolute"
                    style={{ objectFit: "cover", objectPosition: "left center"}}
                    fill
                />

                <animated.div 
                    style={{
                        ...props,
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                    }}
                    className={"bg-slate-950"}
                >
                </animated.div>
            </div>
        ))
    }        
    </div>
  )
}

export default ImageColumnsWithTrailing