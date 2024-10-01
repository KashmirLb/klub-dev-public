"use client"
import useStore from "@/app/stores/store"

const DialogElement = () => {

    const selectedDialog = useStore((state) => state.dialogSelected)
    const dialogOpen = useStore((state) => state.dialogOpen)

  return (
    <>
        {selectedDialog != null && dialogOpen ? selectedDialog : <></>}
    </>
  )
}

export default DialogElement