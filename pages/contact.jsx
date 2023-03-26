import Typewriter from 'typewriter-effect';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { HiMail, HiUser } from 'react-icons/hi'
import { BsChatTextFill } from 'react-icons/bs'
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';

const contact = () => {
    return (
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-white flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="bg-[#20202a] w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-gray-400 md:text-sm'>Pakistan</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-gray-400 md:text-sm'>Peshawar</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Company:</span>
                                <span className='text-gray-400 md:text-sm'>CodeWorthy</span>
                            </div>
                        </div>
                        <div className="bg-[#20202a] w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-gray-400 text-sm'>muhammadosamajavaid@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-gray-400 text-sm'>reachOsama</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-gray-400 text-sm'>+92 (315) 9591822</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full bg-[#20202a] text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-white">
                    <a className='hover:scale-125 ease-in-out duration-700' href="#"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="#"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="#"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="#"><FaTwitter /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href="#"><Fiverr_Icon /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1' href="#"><SiUpwork /></a>
                </div>


                <div className="my-12 w-full h-auto text-white">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <div class="mt-4 py-4 px-4 bg-[#20202a] text-sm">
                        <div>
                            <div class="flex flex-col w-full">
                                <div class="relative mb-6">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input type="text" id="input-group-1" class="bg-[#161a23] text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Name" />
                                </div>
                            </div>

                            <div class="flex flex-col w-full">
                                <div class="relative mb-6">
                                    <div class="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input type="text" id="input-group-1" class="bg-[#161a23] text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Email" />
                                </div>
                            </div>

                            <div class="flex flex-col w-full">
                                <div class="relative mb-6">
                                    <div class="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea rows={6} cols={50} id="input-group-1" class="bg-[#161a23] text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Message" />
                                </div>
                            </div>

                            <div class="my-4">
                                <button onClick={() => alert('working on the feature')} class="px-8 py-2  bg-yellow-500 text-white text-base font-medium"> SEND MESSAGE </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>

    )
}

export default contact