"use client"

import useStore from '../stores/store'
import ProjectDescription from './ProjectDescription'

const ProjectDetails = () => {

  const timePointSelected = useStore((state) => state.timePointSelected)

  if(timePointSelected == null || timePointSelected == ""){
    return (
      <></>
    )
  }

  return (
    <div className='h-full min-h-[calc(100vh-80px)] xs:min-w-[445px] min-w-[304px] max-w-[calc(1200px-320px)] w-full flex flex-1 '>
          <div className="bg-slate-950 min-h-[calc(100vh-5rem-120px)] flex flex-1 justify-center">
      <div className='min-h-full xs:p-4 p-0 rounded-xl transition-all w-full xs:pt-4 pt-0 flex flex-col gap-10'>
        <div>
          <h2 className="w-fit text-2xl text-slate-500 font-geistSans uppercase">{timePointSelected}</h2>
        </div>
        <div className='gap-4 xs:p-4 p-0'>
          <div className='w-full'>
            <ProjectDescription />
          </div>  
        </div>
      </div>
      <div>
      </div>
    </div>
    </div>
  )
}

export default ProjectDetails