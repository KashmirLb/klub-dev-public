"use client"
import { animated, useSpring } from "@react-spring/web"
import { useEffect } from "react"
import Image from "next/image"

type LogoFloatProps = {
  image: string,
  xStart?: number | string,
  yStart?: number | string,
  width: number,
  height: number,
  delay?: number,
  onScreen: boolean,
}
const LogoFloat = (props: LogoFloatProps) => {


    const { image, xStart, yStart, delay = 0, width, height, onScreen } = props
    const x = !xStart ? 0 : xStart == "end" ? (width - 80) : (typeof xStart == "number" ? xStart : 0)
    const y = !yStart ? 0 : yStart == "end" ? (height - 80) : (typeof yStart == "number" ? yStart : 0)

    const [ spring, api ] = useSpring(() => ({
        from: { 
          x: x,
          y: y, 
          scale: 1 },
        onRest: (e) => {
          if(e.finished)
          nextStep(x, y)
        }
    }))

    function randomIntFromInterval(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    const nextStep = (currentXPosition: number, currentYPosition: number) => {
          const newXPosition = randomIntFromInterval(0, width - 80)
          const newYPosition = randomIntFromInterval(0, height - 80)
          api.start({
              from: { x: currentXPosition, y: currentYPosition },
              to: { x: newXPosition, y: newYPosition },
              config: { mass: 100, tension: 800, friction: 500 },
              onRest: (e) => {
                if(e.finished)
                  nextStep(newXPosition, newYPosition)
              }
          })
    }

    const onClick = () => {
      api.set({ scale: 0})
      api.stop()
    }

    useEffect(() => {
      if(onScreen){

        if(typeof x == "number" && typeof y == "number"){
          setTimeout(() => {
            api.set({ x, y })
            nextStep(x, y)
          }, delay)
        }
      }
    }, [onScreen, xStart, yStart, width, height])

    return (
        <>
          <animated.div  
            style={{
              ...spring,
              width: 80,
              height: 80,
              borderRadius: 100,

            }}
            className="hover:cursor-pointer transition-all z-50 absolute"
            onClick={() => onClick()}
          >
            <Image 
              src={image}
              height={80}
              width={80}
              alt="Flying react logo"
         
            />
          </animated.div>
        </>
      )
}

export default LogoFloat