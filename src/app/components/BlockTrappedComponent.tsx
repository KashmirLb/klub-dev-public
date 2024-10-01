"use client"
import { animated, useSpring } from "@react-spring/web"
import useMeasure from "react-use-measure"

const BlockTrappedComponent = () => {

  const [ref, { left, top, height, width }] = useMeasure()
    const [ spring, api ] = useSpring(() => ({
        from: { x: 0, y: 0},
    }))

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {

      const pageYscroll = document.getElementsByTagName("main")[0].scrollTop

      let xPosition = e.clientX - left - 48
      let yPosition = e.clientY - (top - pageYscroll) - 48

      if(xPosition < 0){
        xPosition = 0
      }
      if(yPosition < 0){
        yPosition = 0
      }
      if(xPosition > width - 96){
        xPosition = width - 96
      }
      if(yPosition > height - 96){
        yPosition = height - 96
      }

      api.start({
          from: { x: spring.x.get() ?? 0, y: spring.y.get() ?? 0 },
          to: { x: xPosition, y: yPosition },
      })
    }

    return (
      <div className="bg-slate-700 w-full h-80 p-2 overflow-clip" ref={ref} onMouseMove={(e) => handleClick(e)}
      >
        <animated.div
          style={{
            ...spring,
            width: 80,
            height: 80,
            background: '#ff6d6d',
            borderRadius: 8,
          }}
        />
      </div>
      )
}

export default BlockTrappedComponent