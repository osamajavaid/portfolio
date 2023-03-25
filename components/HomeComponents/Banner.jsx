import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';

const Banner = () => {
    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-[#161a23]">
                <div className="bg-white/5 w-[95%] h-[90%] px-4 py-2">
                    <div className="flex items-center justify-around">
                        <div className="">
                            <div className="">
                                <h1 className="text-5xl text-white font-bold">Hello, Check This Out!</h1>
                            </div>
                            <div className="">
                                <div className=" py-4 pb-4 text-xs h-20 lg:h-auto" style={{ fontFamily: 'monospace' }}>
                                    <span>{"<"}<span className="text-yellow-600 text-lg font-bold">code</span>
                                        {">"} <span className="text-white text-2xl font-bold"> I am  <span className="inline-block">
                                            <Typewriter
                                                options={{
                                                    strings:
                                                        ['MERN Stack Developer',
                                                            'UI/UX Designer'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                        </span> {"</"}<span className="text-yellow-600 text-lg font-bold">code</span>{">"} </span>
                                </div>
                            </div>
                            <button className="py-2 px-10 bg-yellow-500 text-black">Explore</button>
                        </div>
                        <div className="w-48 h-52 relative">
                            <img className='absolute top-7 w-full h-full' src="images/emoji.png" alt="emoji" />
                        </div>
                    </div>
                </div>

                {/* details in row */}
                <div className="flex items-center justify-around w-full px-4">

                    <div className="flex items-center gap-x-1">
                        <span className='text-lg text-yellow-500 font-bold'>10+</span>
                        <span className='text-xs text-white'>Completed Projects</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-lg text-yellow-500 font-bold'>8+</span>
                        <span className='text-xs text-white'>Freelance Clients</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-lg text-yellow-500 font-bold'>5+</span>
                        <span className='text-xs text-white'>Honors & Awards</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-lg text-yellow-500 font-bold'>10+</span>
                        <span className='text-xs text-white'>Opensource Projects</span>
                    </div>

                </div>
            </div>
        </BannerLayout>
    )
}

export default Banner