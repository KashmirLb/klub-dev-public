"use client"

import { useEffect } from "react"
import { useTrail, animated } from "react-spring"

const FirstLengthComponent = ({index, children} : {index: number, children: React.ReactNode}) => {
    if(index == 0){
        return <div className="w-5/12 md:w-4/12 h-full ">{children}</div>
    }
    else {
        return <div className="w-3/12 md:w-2/12 h-full">{children}</div>
    }
}

const SecondLengthComponent = ({index, children} : {index: number, children: React.ReactNode}) => {

   if(index == 0){
        return <div className="w-3/12 md:w-2/12 h-full">{children}</div>
    }
    else{
        return <div className="w-2/5 md:w-6/12 h-full">{children}</div>
    }
}

const GradientLines = () => {

    const [ firstTrail, firstApi ] = useTrail(
        2,
        () => ({
            config: { mass: 40, tension: 700, friction: 300 },
            from: { width: "0%"},
        })
    )

    const [ secondTrail, secondApi ] = useTrail(
        2,
        () => ({
            config: { mass: 40, tension: 700, friction: 300 },
            from: { width: "0%"},
        })
    )

    useEffect(() => {
        setTimeout(() => {
            firstApi.start({
                from: { width: "0%"},
                to: { width: "100%" },
                config: { mass: 40, tension: 700, friction: 300 },
            })
            secondApi.start({
                from: { width: "0%"},
                to: { width: "100%" },
                config: { mass: 40, tension: 700, friction: 300 },
            })
        }, 2000)
    }, [])
    
  return (
    <>
        <div className="h-2 w-full flex gap-2 mt-10">
          {firstTrail.map((props, i) => (
            <FirstLengthComponent index={i} key={"first" + i}>
              <animated.div style={props} className={`h-full w-full ${i == 0 ? "bg-grad-3" : "bg-grad-1"}`}>
              </animated.div>
            </FirstLengthComponent>
          ))}
        </div>
        <div className="h-2 w-full flex gap-2 pl-10">
          {secondTrail.map((props, i) => (
            <SecondLengthComponent index={i} key={"second" + i}>
              <animated.div style={props} className={`h-full w-full ${i == 0 ? "bg-grad-2" : "bg-grad-4"}`}>
              </animated.div>
            </SecondLengthComponent>
          ))}
        </div>
    </>
  )
}

export default GradientLines