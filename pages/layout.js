import Intro from '../components/Intro'
import Nav from '../components/Nav/Nav'
import { CgMenuRightAlt } from 'react-icons/cg'
import { useEffect, useRef, useState } from 'react'

export default function Layout({ children }) {
    let menuRef = useRef()

    const [open, setOpen] = useState(false)
    const [left, setLeft] = useState(false)

    useEffect((e) => {
        const handler = (e) => {
            if (!menuRef?.current?.contains(e?.target)) {
                setOpen(false)
                console.log(menuRef.current)
            }
        }

        document.addEventListener('mousedown', handler)

        return (() => {
            document.removeEventListener('mousedown', handler)
            setOpen(false)
        })
    }, [])
    // const [right, setRight] = useState(false)

    return (
        <>

            <div className="h-[96vh] flex flex-col select-none">
                <div className="lg:hidden">
                    <div className="bg-[#ff000071]  w-full h-10 flex items-center justify-between px-2 lg:hidden">
                        <div onClick={e => setLeft(!left)}>
                            <CgMenuRightAlt />
                        </div>
                        <div onClick={e => setOpen(!open)}>
                            <CgMenuRightAlt />
                        </div>
                    </div>
                </div>
                <div className="flex relative h-full justify-between gap-x-3">

                    {/* left most side */}
                    <div className={`w-64 h-full overflow-hidden bg-[#20202A] shadow-2xl z-[300] lg:flex flex-col  lg:relative ${left ? 'flex absolute' : 'hidden'}`}>
                        <Intro />
                    </div>

                    {/* middle of screen */}
                    <div className="w-full lg:w-9/12 shadow-2xl">

                        {children}
                    </div>

                    {/* right side */}
                    <>
                        <div className={`block absolute lg:w-20 lg:relative bg-[#20202A] shadow-2xl  `}>
                            <div onClick={e => setOpen(!open)} className="bg-gray-800 hidden lg:flex items-center h-16 justify-center text-2xl ">
                                <CgMenuRightAlt />
                            </div>
                        </div>
                        {open && <Nav menuRef={menuRef} setOpen={setOpen} />}
                    </>
                </div>
            </div>


        </>

    )
}