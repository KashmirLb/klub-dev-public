"use client"
import useStore from '@/app/stores/store'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Link from 'next/link'

export default function StoreModelDialog() {
  
  const dialogOpen = useStore((state) => state.dialogOpen)
  const setDialogOpen = useStore((state) => state.setDialogOpen)

  function close() {
    setDialogOpen(false, null)
  }

  return (
    <>
      <Dialog open={dialogOpen} as="div" className="relative z-10" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto bg-slate-900/70">
          <div className="flex h-full min-h-full items-center justify-center p-4">
            <DialogPanel
            
              className=" flex justify-center items-center rounded-xl p-6 bg-slate-950 backdrop-blur-2xl duration-300 ease-in-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
                <div>
                    <DialogTitle as="h3" className="w-fit text-2xl text-slate-500 font-geistSans uppercase">
                        Order Model
                    </DialogTitle>
                    <div className="mt-2 text-sm/6 text-slate-400">
                    Let&apos;s see an <span className='text-slate-100'>example</span> of a computer repair shop: <br/>
                    <ul className='list-disc list-inside ml-2'>
                        <li>You have <span className="text-slate-100">Employees</span> (or admin, start with &apos;E&apos;, E001...) and <span className="text-slate-100">customers</span> (start with &apos;C&apos;, C001...).</li>
                        <li>Employees can log <span className="text-slate-100">Orders</span> (or requests, start with &apos;R&apos;, R001...) </li>
                        <li>Employees can attach <span className="text-slate-100">Assets</span> (start with &apos;A&apos;, A001...) to the orders.</li>
                        <li>Both employees and customers can leave <span className="text-slate-100">Comments</span> on the orders.</li>
                        <li>Employees can also create users, reset passwords, etc...</li>
                    </ul>
        
                    </div>
                    <div className='text-slate-400 my-2 text-sm'>
                        <h3 className="w-fit text-lg text-slate-500">Try me!</h3>
                        <p>[Password resets and breaking stuff is disabled]</p>
                        <div className="flex gap-2 mt-6">
                            [Admin]
                            <div>
                                Username: <span className='text-slate-200'>E003</span>
                            </div>
                            <div>
                                Password: <span className='text-slate-200'>Vi3w@dmin</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            [Customer]
                            <div>
                                Username: <span className='text-slate-200'>C001</span>
                            </div>
                            <div>
                                Password: <span className='text-slate-200'>Vi3wCust0mer</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-slate-400 my-4'>
                        Link: <Link href="https://chimerical-mermaid-d7a56b.netlify.app/" target="_blank" className="text-slate-200 hover:underline">
                            Order Model
                        </Link>
                    </div>
                    <div className="mt-4">
                        <Button
                        className="bg-slate-600 text-slate-100 rounded-md hover:bg-slate-500 w-full py-2"
                        onClick={close}
                        >
                        OK
                        </Button>
                    </div>

                </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}