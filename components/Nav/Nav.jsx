import { ImCross } from 'react-icons/im'
import { FiAward } from 'react-icons/fi'
import { FaRegHandshake } from 'react-icons/fa'
import { IoIosRadioButtonOff } from 'react-icons/io'
import { GoHome } from 'react-icons/go'
import { HiIdentification } from 'react-icons/hi'
import NavItem from './NavItem'


const Nav = ({ setOpen, menuRef }) => {
    return (
        <div ref={menuRef} className="absolute z-[100] flex flex-col justify-center inset-y-0 right-0 w-64 h-full bg-[#20202A] shadow-2xl">
            <div onClick={e => setOpen(false)} className="flex absolute top-0 w-full items-center justify-center text-2xl h-16 bg-gray-800">
                <ImCross />
            </div>
            <div className="flex flex-col gap-y-2 px-6 w-full">
                <NavItem setOpen={setOpen} NavRoute={'/home'} NavIcon={<GoHome />} NavText={'Home'} />
                <NavItem setOpen={setOpen} NavRoute={'/contact'} NavIcon={<FaRegHandshake />} NavText={'Contact'} />
                <NavItem setOpen={setOpen} NavRoute={'/background'} NavIcon={<HiIdentification />} NavText={'Background'} />
                <NavItem setOpen={setOpen} NavRoute={'/portfolio'} NavIcon={<FiAward />} NavText={'Portfolio'} />
            </div>
        </div>
    )
}

export default Nav