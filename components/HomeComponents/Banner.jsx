import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import { Link } from 'react-scroll';

const Banner = () => {
    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-[#161a23]">
                <div className="bg-white/5 w-[95%] h-[90%] px-4 py-2 flex md:block">
                    <div className="flex items-center md:items-center md:justify-around">
                        <div className="">
                            <div className="">
                                <h1 className="text-3xl sm:text-4xl xl:text-5xl text-white font-bold">Hello, Check This Out!</h1>
                            </div>
                            <div className="">
                                <div className=" py-4 text-white pb-4 text-xs h-20 lg:h-auto" style={{ fontFamily: 'monospace' }}>
                                    <span>{"<"}<span className="text-yellow-600 sm:text-base xl:text-lg font-bold">div</span>
                                        {">"} <span className="text-white sm:text-xl xl:text-2xl font-bold"> I am a  <span className="inline-block">
                                            <Typewriter
                                                options={{
                                                    strings:
                                                        ['MERN Stack Developer',
                                                            'NexJs Developer'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                        </span> {"</"}<span className="text-yellow-600 sm:text-base xl:text-lg font-bold">div</span>{">"} </span>
                                </div>
                            </div>
                            <Link to='intro' spy={true} smooth={true} duration={500} offset={-50} className="py-2 px-10 bg-yellow-500 text-black cursor-pointer">Explore</Link>
                        </div>
                        <div className="w-48 h-52 relative hidden md:block">
                            <img className='absolute top-7 w-full h-full' src="images/emoji.png" alt="emoji" />
                        </div>
                    </div>
                </div>

                {/* details in row */}
                <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-yellow-500 font-bold'>10+</span>
                        <span className='text-xs text-white'>Completed Projects</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-yellow-500 font-bold'>8+</span>
                        <span className='text-xs text-white'>Freelance Clients</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-yellow-500 font-bold'>5+</span>
                        <span className='text-xs text-white'>Honors & Awards</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-yellow-500 font-bold'>10+</span>
                        <span className='text-xs text-white'>Opensource Projects</span>
                    </div>

                </div>
            </div>
        </BannerLayout>
    )
}

export default Banner