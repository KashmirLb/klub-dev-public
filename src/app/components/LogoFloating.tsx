"use client"
import { useRef } from "react"
import useMeasure from "react-use-measure"
import useOnScreen from "../hooks/useOnScreen"
import LogoFloat from "./LogoFloat"

const LogoFloating = () => {


    const [ref, {width, height}] = useMeasure()
    const boxRef = useRef<HTMLDivElement>(null)
    const onScreen = useOnScreen(boxRef)

    return (
      <div className="bg-transparent w-full h-80 p-2 overflow-visible absolute" ref={boxRef}>
        <div className="w-full h-full relative" ref={ref}>
          {
            ref != null && onScreen && width > 0 && height > 0 && (
              <>
              <LogoFloat width={width} onScreen={onScreen} height={height} image="/images/react-icon.png" xStart={50} yStart={100} delay={2000}  />
              <LogoFloat width={width} onScreen={onScreen} height={height} image="/images/nextjs-icon-w.svg" xStart={100} yStart={50} delay={4000} />
              <LogoFloat width={width} onScreen={onScreen} height={height} image="/images/tailwindcss-icon.svg" xStart="end" yStart="end" />
              <LogoFloat width={width} onScreen={onScreen} height={height} image="/images/react-icon.png" xStart={200} yStart={100} delay={1000} />
              <LogoFloat width={width} onScreen={onScreen} height={height} image="/images/nextjs-icon-w.svg" xStart={width - 80} yStart={height - 80} delay={3000} />
              <LogoFloat width={width} onScreen={onScreen} height={height} image="/images/tailwindcss-icon.svg" xStart="end" yStart="end" />
              </>
          )}
        </div>
      </div>
      )
}

export default LogoFloating