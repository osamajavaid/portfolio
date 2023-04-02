import { ImCross } from 'react-icons/im'
import { FiAward } from 'react-icons/fi'
import { FaHandshake } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'
import { HiIdentification } from 'react-icons/hi'
import NavItem from './NavItem'


const Nav = ({ setOpen }) => {
    return (
        <div className="absolute z-[100] flex flex-col justify-center lg:inset-y-0 -top-10 -right-0 lg:right-0 w-64 h-screen lg:h-full bg-[#20202A] shadow-2xl">
            <div onClick={e => setOpen(false)} className="flex text-gray-500 absolute top-0 w-full items-center justify-center text-2xl h-16 bg-gray-800">
                <ImCross />
            </div>
            <div className="flex flex-col gap-y-2 px-6 w-full">
                <NavItem setOpen={setOpen} NavRoute={'/'} NavIcon={<ImHome />} NavText={'Home'} />
                <NavItem setOpen={setOpen} NavRoute={'/Contact'} NavIcon={<FaHandshake />} NavText={'Contact'} />
                <NavItem setOpen={setOpen} NavRoute={'/Background'} NavIcon={<HiIdentification />} NavText={'Background'} />
                <NavItem setOpen={setOpen} NavRoute={'/Portfolio'} NavIcon={<FiAward />} NavText={'Portfolio'} />
            </div>
        </div>
    )
}

export default Nav