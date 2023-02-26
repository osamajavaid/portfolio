import { AiFillCopyrightCircle } from 'react-icons/ai'
import { MdMail, MdCall } from 'react-icons/md'
const Footer = () => {
    return (
        <div className="mt-4 ">
            <div className="flex justify-between text-xs font-normal text-gray-500 py-4 px-2 md:px-4 w-full bg-[#20202a]">
                <div className='flex items-center'>
                    <div className="mr-1 text-base">
                        <AiFillCopyrightCircle />
                    </div>
                    <span>2023 All Rights Reserved.</span>
                </div>
                <div className="hidden md:flex items-center">
                    <div className="mr-1 text-base">
                        <MdCall />
                    </div>
                    <span>Phone: +92 315 9591822</span>
                </div>
                <div className="flex items-center">
                    <div className="mr-1 text-base">
                        <MdMail />
                    </div>
                    <div>muhammadosamajavaid@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Footer