import Intro from '../components/Common/Intro'
import Nav from '../components/Common/Nav/Nav'
import { CgMenuRightAlt } from 'react-icons/cg'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useState } from 'react'

export default function Layout({ children }) {
    const [open, setOpen] = useState(false)
    const [intro, setIntro] = useState(false)

    return (
        <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none`}>
            <div className="lg:hidden">
                <div className="bg-gray-800 text-gray-500 w-full h-10 flex items-center justify-between px-2 lg:hidden">
                    <div className='icon flex items-center gap-x-2' onClick={e => setIntro(!intro)}>
                        <BsArrowRight />
                        <span>Tap for Intro</span>
                    </div>
                    <div className='icon flex items-center gap-x-2' onClick={e => setOpen(!open)}>
                        <span>Tap for Nav</span>
                        <BsArrowLeft />
                    </div>
                </div>
            </div>
            <div className="flex relative h-full justify-between gap-x-3">

                {/* left most side */}
                <div className={`w-64 h-screen left-0 -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-[#20202A] shadow-2xl z-50 lg:flex flex-col  lg:relative ${intro ? 'flex absolute' : 'hidden'}`}>
                    <Intro />
                </div>
                {/* overlay */}
                {intro && <div onClick={(e) => setIntro(false)} className='fixed top-0 left-0  w-full h-full bg-black/50 backdrop-blur-[2px] z-40'></div>}

                {/* middle of screen */}
                <div className="w-full h-auto lg:w-9/12 shadow-2xl relative overflow-auto no-scrollbar">
                    {children}
                </div>

                {/* right side */}
                {/* right side */}
                <div className={`block absolute lg:w-20 lg:relative bg-[#20202A] shadow-2xl`}>
                    <div onClick={e => setOpen(!open)} className="bg-gray-800 text-gray-500 hidden lg:flex items-center h-16 justify-center text-2xl ">
                        <CgMenuRightAlt />
                    </div>
                </div>
                {open && <Nav setOpen={setOpen} />}
                {/* overlay */}
                {open && <div onClick={(e) => setOpen(false)} className='fixed top-0 left-0  w-full h-full bg-black/50 z-50 backdrop-blur-[2px]'></div>}

            </div>
        </div>
    )
}