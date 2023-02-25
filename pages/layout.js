import Intro from '../components/Intro'
import Nav from '../components/Nav/Nav'
import { CgMenuRightAlt } from 'react-icons/cg'
import { useEffect, useRef, useState } from 'react'

export default function Layout({ children }) {
    let menuRef = useRef()
    let introRef = useRef()

    const [open, setOpen] = useState(false)
    const [left, setLeft] = useState(false)

    useEffect((e) => {
        const handler = (e) => {
            if (!menuRef?.current?.contains(e?.target)) {
                setOpen(false)
                console.log(menuRef.current)
            }
            if (!menuRef?.current?.contains(e?.target)) {
                setLeft(false)
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

            <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none`}>
                <div className="lg:hidden">
                    <div className="bg-gray-800 w-full h-10 flex items-center justify-between px-2 lg:hidden">
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
                    <div ref={introRef} className={`w-64 h-screen -left-3 -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-[#20202A] shadow-2xl z-50 lg:flex flex-col  lg:relative ${left ? 'flex absolute' : 'hidden'}`}>
                        <Intro />
                    </div>
                    {/* overlay */}
                    {left && <div className='fixed top-0 left-0  w-full h-full bg-black/5 z-40 backdrop-blur-sm'></div>}

                    {/* middle of screen */}
                    <div className="w-full lg:w-9/12 shadow-2xl">
                        {children}
                    </div>

                    {/* right side */}
                    <>
                        <div className={`block absolute lg:w-20 lg:relative bg-[#20202A] shadow-2xl`}>
                            <div onClick={e => setOpen(!open)} className="bg-gray-800 hidden lg:flex items-center h-16 justify-center text-2xl ">
                                <CgMenuRightAlt />
                            </div>
                        </div>
                        {open && <Nav menuRef={menuRef} setOpen={setOpen} />}
                        {/* overlay */}
                        {open && <div className='fixed top-0 left-0  w-full h-full bg-black/5 z-50 backdrop-blur-sm'></div>}
                    </>
                </div>
            </div>


        </>

    )
}