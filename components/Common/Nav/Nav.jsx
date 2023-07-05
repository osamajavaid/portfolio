import { ImCross } from 'react-icons/im'
import { FiAward } from 'react-icons/fi'
import { FaHandshake } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'
import { HiIdentification } from 'react-icons/hi'
import NavItem from './NavItem'


const Nav = ({ setOpen, open }) => {
    return (
        <main
            className={
                " fixed overflow-hidden z-[50000] bg-gray-900/50 backdrop-blur-sm inset-0 transform ease-in" +
                (open
                    ? "transition-opacity opacity-100 duration-10 translate-x-0"
                    : "transition-all delay-200 opacity-0 translate-x-full")
            }
        >
            <section
                className={
                    "w-screen max-w-[260px] right-0 absolute h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (open ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className="relative h-screen">
                    <div className="absolute z-50 flex flex-col justify-center lg:inset-y-0  -right-0 lg:right-0 w-64 h-screen lg:h-full bg-[#20202A] shadow-2xl">
                        <div onClick={e => setOpen(false)} className="flex text-gray-500 absolute top-0 w-full items-center justify-center text-sm h-12 bg-gray-800">
                            <ImCross />
                        </div>
                        <div className="flex flex-col gap-y-2 px-6 w-full transition">
                            <NavItem setOpen={setOpen} NavRoute={'/'} NavIcon={<ImHome />} NavText={'Home'} />
                            <NavItem setOpen={setOpen} NavRoute={'/contact'} NavIcon={<FaHandshake />} NavText={'Contact'} />
                            <NavItem setOpen={setOpen} NavRoute={'/background'} NavIcon={<HiIdentification />} NavText={'Background'} />
                            <NavItem setOpen={setOpen} NavRoute={'/portfolio'} NavIcon={<FiAward />} NavText={'Portfolio'} />
                        </div>
                    </div>
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setOpen(false);
                }}
            ></section>
        </main>

    )
}

export default Nav