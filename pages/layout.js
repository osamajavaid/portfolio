import Intro from '../components/Intro/Intro'
import Nav from '../components/Nav/Nav'
import { CgMenuRightAlt } from 'react-icons/cg'
import { useState } from 'react'

export default function Layout({ children }) {
    const [open, setOpen] = useState(false)

    return (

        <div className="h-[96vh] flex justify-between gap-x-3 select-none">
            <div className="hidden lg:block">
                <Intro />
            </div>
            <div className="w-full lg:w-9/12 shadow-2xl">
                <div className="bg-red-600  w-full h-10 flex items-center justify-between px-2 lg:hidden">
                    <div className="" onClick={e => setOpen(!open)}>
                        <CgMenuRightAlt />
                    </div>
                    {/* <div className='reative'> */}
                    {/* </div> */}
                    <div className="">
                        <CgMenuRightAlt />
                    </div>
                </div>
                {open && <Intro />}
                {children}
            </div>
            <div className="hidden lg:block w-20 relative bg-[#20202A] shadow-2xl">
                <div onClick={e => setOpen(!open)} className="bg-gray-800 flex items-center h-16 justify-center text-2xl ">
                    <CgMenuRightAlt />
                </div>
                {open && <Nav setOpen={setOpen} />}
            </div>
        </div>

    )
}