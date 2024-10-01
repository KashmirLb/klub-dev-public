"use client"
import { nanoid } from 'nanoid'
import { useEffect, useRef, useState } from 'react'
import useOnScreen from '../hooks/useOnScreen'

type ChangingTextComponentProps = {
    text: string,
    duration?: number
}

const ChangingTextComponent = (props: ChangingTextComponentProps) => {

    const { text, duration = 1500 } = props

    const [ textToShow, setTextToShow ] = useState("")
    const [ textUsed, setTextUsed ] = useState(0)

    const timeToShowFullText = duration / text.length
    const textContainerRef = useRef<HTMLDivElement>(null)
    const isOnScreen = useOnScreen(textContainerRef)
    
    useEffect(() => {
        const executeDelayed = () => {

            const spaceRemaining = text.length - textUsed

            if (spaceRemaining >= 0) {
                const newText = text.slice(0, textUsed)
                setTextUsed(textUsed + 1)

                if(spaceRemaining > 10){
                    setTextToShow(newText + nanoid(10))
                }
                else{
                    setTextToShow(newText + nanoid(spaceRemaining))
                }
            }
        }
        if(isOnScreen){
            setTimeout(executeDelayed, timeToShowFullText)
        }
    }, [textUsed, isOnScreen])

  return (
    <div ref={textContainerRef}>
        {textToShow == "" ? <span className='opacity-0'>Loading...</span> : textToShow}
    </div>
  )
}

export default ChangingTextComponent