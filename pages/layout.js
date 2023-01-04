import Intro from '../components/Intro/Intro'
import Nav from '../components/Nav/Nav'
import { CgMenuRightAlt } from 'react-icons/cg'
import { useState } from 'react'

export default function Layout({ children }) {
    const [open, setOpen] = useState(false)

    return (

        <div className="h-[96vh] flex justify-between gap-x-3 select-none">
            <div className="w-64 ">
                <Intro />
            </div>
            <div className="w-9/12 bg-[#20202A] shadow-2xl">
                {children}
            </div>
            <div className="w-20 relative bg-[#20202A] shadow-2xl">
                <div onClick={e => setOpen(!open)} className="bg-gray-800 flex items-center h-16 justify-center text-2xl ">
                    <CgMenuRightAlt />
                </div>
                {open && <Nav setOpen={setOpen} />}
            </div>
        </div>

    )
}