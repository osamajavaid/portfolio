import Intro from '../components/Intro/Intro'
import Nav from '../components/Nav/Nav'
import { CgMenuRightAlt } from 'react-icons/cg'
import { useState } from 'react'

export default function Layout({ children }) {
    const [open, setOpen] = useState(false)
    const [left, setLeft] = useState(false)

    return (
        <>

            <div className="h-[96vh] flex flex-col select-none">
                <div className="lg:hidden">
                    <div className="bg-red-600  w-full h-10 flex items-center justify-between px-2 lg:hidden">
                        <div className="" onClick={e => setLeft(!left)}>
                            <CgMenuRightAlt />
                        </div>
                        <div className="" onClick={e => setLeft(!left)}>
                            <CgMenuRightAlt />
                        </div>
                    </div>
                </div>
                <div className=" lg:flex relative h-full justify-between gap-x-3">
                    <div className={`w-64 h-full overflow-hidden bg-[#20202A] shadow-2xl z-[300] flex flex-col absolute lg:relative lg:block ${left ? 'block' : 'hidden'}`}>
                        <Intro />
                    </div>
                    <div className="w-full lg:w-9/12 shadow-2xl">

                        {children}
                    </div>
                    <div className="hidden lg:block w-20 relative bg-[#20202A] shadow-2xl">
                        <div onClick={e => setOpen(!open)} className="bg-gray-800 flex items-center h-16 justify-center text-2xl ">
                            <CgMenuRightAlt />
                        </div>
                        {open && <Nav setOpen={setOpen} />}
                    </div>
                </div>
            </div>

            {/* <div className="h-[96vh] flex justify-between lg:hidden gap-x-3 relative select-none">
                <div className={`transition-opacity delay-800 duration-300 absolute ease-in ${left ? 'block left-0 opacity-100' : 'hidden -left-80 opacity-0'}`}>
                    <Intro />
                </div>
                <div className="w-full lg:w-9/12 shadow-2xl">
                    <div className="bg-red-600  w-full h-10 flex items-center justify-between px-2 lg:hidden">
                        <div className="" onClick={e => setLeft(!left)}>
                            <CgMenuRightAlt />
                        </div>
                        <div className="" onClick={e => setLeft(!left)}>
                            <CgMenuRightAlt />
                        </div>
                    </div>
                    {children}
                </div>
                <div className="hidden lg:block w-20 relative bg-[#20202A] shadow-2xl">
                    <div onClick={e => setOpen(!open)} className="bg-gray-800 flex items-center h-16 justify-center text-2xl ">
                        <CgMenuRightAlt />
                    </div>
                    {open && <Nav setOpen={setOpen} />}
                </div>
            </div> */}
        </>

    )
}