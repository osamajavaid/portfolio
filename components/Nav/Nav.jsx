import { ImCross } from 'react-icons/im'
import { FiAward } from 'react-icons/fi'
import { FaRegHandshake } from 'react-icons/fa'
import { IoIosRadioButtonOff } from 'react-icons/io'
import { GoHome } from 'react-icons/go'
import { HiIdentification } from 'react-icons/hi'


const Nav = () => {
    return (
        <div className="absolute flex flex-col justify-center inset-y-0 right-0 w-64 h-full bg-[#20202A] shadow-2xl">
            <div className="flex absolute top-0 w-full items-center justify-center text-2xl h-16 bg-gray-800">
                <ImCross />
            </div>
            <div className="flex flex-col gap-y-2 px-6 w-full">
                <div className="flex items-center px-2 hover:bg-yellow-500 text-gray-400 hover:text-gray-900 hover:font-bold py-1 font-bold space-x-4 text-lg">
                    <GoHome />
                    <span>Home</span>
                </div>
                <div className="flex items-center px-2 hover:bg-yellow-500 text-gray-400 hover:text-gray-900 hover:font-bold py-1 font-bold space-x-4 text-lg">
                    <FaRegHandshake />
                    <span>Contact</span>
                </div>
                <div className="flex items-center px-2 hover:bg-yellow-500 text-gray-400 hover:text-gray-900 hover:font-bold py-1 font-bold space-x-4 text-lg">
                    <HiIdentification />
                    <span>Background</span>
                </div>
                <div className="flex items-center px-2 hover:bg-yellow-500 text-gray-400 hover:text-gray-900 hover:font-bold py-1 font-bold space-x-4 text-lg">
                    <FiAward />
                    <span>Portfolio</span>
                </div>
            </div>
        </div>
    )
}

export default Nav