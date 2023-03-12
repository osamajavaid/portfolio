import Typewriter from 'typewriter-effect';
import BannerLayout from '../components/BannerLayout';

const contact = () => {
    return (
        <>
            <BannerLayout>
                <div className="my-6 text-white flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="bg-red-600 w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
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
                        <div className="bg-red-600 w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
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
                <div className="h-16 w-full bg-red-700">

                </div>
            </BannerLayout>

        </>
    )
}

export default contact