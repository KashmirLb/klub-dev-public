"use client"
import { create } from 'zustand'
import { createSelectors } from './selector'
import projects from '../components/ProjectList'


type State = {
    timePointSelected: string,
    colors: string[][],
    projects: ProjectType[],
    indexProjectSelected: number,
    dialogOpen: boolean,
    dialogSelected: JSX.Element | null,
}

type Action = {
    setTimePointSelected: (timePointSelected: string) => void,
    setIndexProjectSelected: (indexProjectSelected: number) => void,
    setDialogOpen: (dialogOpen: boolean, dialogSelected: JSX.Element | null) => void,
}

const initialState: State = {
    timePointSelected: "",
    colors: [
        [ "#518071", "#00c894", "#c8fcea"],
        [ "#F87874", "#FF9769", "#FFBB60"],
        [ "#38bdf8", "#00d2f3", "#00e4db"],
        [ "#ff43f1", "#6e78ff", "#008fff"],
    ],
    projects: projects,
    indexProjectSelected: 0,
    dialogOpen: false,
    dialogSelected: null,
}

// GET INITIAL DATA
const useBasicStore = create<State & Action>()((set, get) => ({
  ...initialState,
  setTimePointSelected: (timePointSelected: string) => {
      const index = get().projects.findIndex( proj => proj.name == timePointSelected)
      set({ timePointSelected })
      set({ indexProjectSelected: index })
  },
  setIndexProjectSelected: (indexProjectSelected: number) => {
    set({ indexProjectSelected })
  },
  setDialogOpen: (dialogOpen: boolean, dialogSelected: JSX.Element | null) => {
    if(dialogOpen){
        set({ dialogOpen })
        set({ dialogSelected })
    }
    else{
        set({ dialogOpen: false })
        set({ dialogSelected: null })
    }
  },
}))

const useStore = createSelectors(useBasicStore)

export default useStore