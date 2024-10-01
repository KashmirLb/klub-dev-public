"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const ImageColumnsComponent = ({ images }: { images: string[] }) => {

    const [ minWidthReached, setMinWidhtReached ] = useState<boolean | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        if(containerRef.current !== null){
            const width = containerRef.current.getBoundingClientRect().width
            setMinWidhtReached(width < (images.length * 100) + 20)
        }
    }, [containerRef])

    /**
     * Images should have a min width of 110 px.
     * 
     * 
     * 
     * when 100vw is less than :  images*110 + gap*8 + p*2 ---> Images go in rows
     * 
     * 
     */

  return (
    <div className={`w-full flex justify-between gap-5 p-10 min-h-[calc(100vh-5rem-120px)]
        ${minWidthReached ? "flex-col" : "flex-row"}    
    `} ref={containerRef}>
        {minWidthReached != null ? images.map((images, index) => (
            <div className={`bg-slate-400 
            
            ${minWidthReached ?  "w-full flex- min-h-16" : "min-h-[calc(100vh-5rem-120px)]"} flex flex-1 relative`} key={"image" + index + images}>
                <Image
                    src={images}
                    alt={images}
                    style={{ objectFit: "cover", objectPosition: "left center"}}
                    fill
                />
            </div>
        ))
        : null
    }        
    </div>
  )
}

export default ImageColumnsComponent