"use client"
import { animated, useSpring } from "@react-spring/web"
import { useState } from "react"
import useMeasure from "react-use-measure"

const BouncingBallArea = () => {

    const [ref, {width, height}] = useMeasure()
    const [ animationRunning, setAnimationRunning ] = useState(false)
    const [ ballHoverRunning, setBallHoverRunning ] = useState(false)

    const [ spring, api ] = useSpring(() => ({
        from: { x: 0, y: 0, scale: 1, background: '#ff6d6d'},
        onRest: (e) => {
          if(e.finished)
          nextStep(0, 0)
        }
    }))

    const [ dotSpring, dotApi ] = useSpring(() => ({
        from: { x: 0, y: 0},
        onRest: (e) => {
          if(e.finished)
          nextStep(0, 0)
        }
    }))

    function randomIntFromInterval(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    const handleClick = () => {

      const newXPosition = randomIntFromInterval(0, width - 80)
      const newYPosition = randomIntFromInterval(0, height - 80)

      api.start({
          from: { x: 0, y: 0, scale: 1, background: '#ff6d6d' },
          to: { x: newXPosition, y: newYPosition },
          config: { mass: 50, tension: 1000, friction: 100 },
          onRest: (e) => {
            if(e.finished)
            nextStep(newXPosition, newYPosition)
          }
      })
      dotApi.start({
          from: { x: 0, y: 0 },
          to: { x: newXPosition, y: newYPosition },
          config: { mass: 1, tension: 170, friction: 26 }
      })

      setAnimationRunning(true)
      setBallHoverRunning(false)
    }

    const nextStep = (currentXPosition: number, currentYPosition: number) => {
          const newXPosition = randomIntFromInterval(0, width - 80)
          const newYPosition = randomIntFromInterval(0, height - 80)
          api.start({
              from: { x: currentXPosition, y: currentYPosition },
              to: { x: newXPosition, y: newYPosition },
              config: { mass: 50, tension: 1000, friction: 100 },
              onRest: (e) => {
                if(e.finished)
                nextStep(newXPosition, newYPosition)
              }
          })
          dotApi.start({
              from: { x: currentXPosition, y: currentYPosition },
              to: { x: newXPosition, y: newYPosition },
          })
    }

    const animationStop = () => {
      api.stop()
      dotApi.stop()
      api.start({
        to: { x: 0, y: 0},
        config: { duration: 1500 }
      })
      dotApi.start({
        to: { x: 0, y: 0},
        config: { duration: 1500 }
      })
      setAnimationRunning(false)
    }

    const increaseBallSize = () => {

      if(!ballHoverRunning && !animationRunning){
        api.start({
          from: { scale: 1, background: '#ff6d6d' },
          to: { scale: 1.3, background: '#eba7a7' },
          config: { duration: 700 },
          loop: true
        })
        setBallHoverRunning(true)
      }
    }

    const resetBallSize = () => {
      if(ballHoverRunning && !animationRunning){
        api.stop()
        api.start({
          to: { scale: 1, background: '#ff6d6d'},
          config: { mass: 1, tension: 170, friction: 26 }
        })
        setBallHoverRunning(false)
      }
    }

    return (
      <div className="bg-slate-700 w-full h-80 p-2 overflow-clip">
        <div className="w-full h-full relative" ref={ref}>
          {
            animationRunning && (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-8xl text-white bg-black opacity-0 hover:opacity-25 transition-all duration-500 hover:cursor-pointer"
                onClick={() => animationStop()}
              >
                STOP
              </div>
            )
          }
          <animated.div  
            onClick={handleClick}
            onMouseOver={increaseBallSize}
            onMouseOut={resetBallSize}
            style={{
              ...spring,
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
            className="hover:cursor-pointer transition-all"
          />
          <animated.div
            style={{
              ...dotSpring,
              width: 5,
              height: 5,
              position: 'absolute',
              top: 37.5,
              left: 37.5,
              background: '#fff',
              borderRadius: 100,
              pointerEvents: 'none'
            }}
            />

        </div>
      </div>
      )
}

export default BouncingBallArea