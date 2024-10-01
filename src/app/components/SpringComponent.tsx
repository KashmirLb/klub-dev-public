"use client"
import { animated, useSpring } from "@react-spring/web"

const SpringComponent = () => {

    const [ spring, api ] = useSpring(() => ({
        from: { x: 0 },
    }))

    const handleClick = () => {
        api.start({
            from: { x: 0 },
            to: { x: 100 },

        })
    }

    return (
      <div className="w-full p-2 overflow-clip">
          <animated.div  
            onClick={handleClick}
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

export default SpringComponent