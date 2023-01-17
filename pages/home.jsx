import Typewriter from 'typewriter-effect';

const home = () => {
    return (
        <div className="PARENT -z-10">
            <div
                className="relative backdrop-blur-sm w-full h-72 bg-fixed z-10"
                style={{
                    background: 'url(images/background.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    // opacity: '0.5'

                }}>
                <div className="absolute inset-0 z-20 flex flex-col items-center px-4 py-6 justify-center w-full h-full bg-gradient-to-t from-[#161a23]">
                    <div className="bg-white/20 w-[95%] h-[90%] px-4 py-2">
                        <div className="flex items-center justify-around">
                            <div className="">
                                <div className="">
                                    <h1 className="text-5xl text-white font-bold">Hello, Check This Out!</h1>
                                </div>
                                <div className="">
                                    <div class=" py-4 pb-4 text-xs h-20 lg:h-auto" style={{ fontFamily: 'monospace' }}>
                                        <span> &lt;<span class="text-yellow-600 font-bold">code</span>
                                            &gt; <span className="text-white font-bold"> I am  <span class="inline-block">
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
                                            </span> &lt;/<span class="text-yellow-600 font-bold">code</span>&gt; </span>
                                    </div>
                                </div>
                                <button className="py-2 px-10 bg-yellow-500 text-black">Explore</button>
                            </div>
                            <div className="w-48 h-52">
                                <img className='w-full h-full' src="images/emoji.png" alt="emoji" />
                            </div>
                        </div>
                    </div>

                    {/* details in row */}
                    <div className="flex items-center justify-around w-full px-4">

                        <div className="flex items-center gap-x-1">
                            <span className='text-lg text-yellow-500 font-bold'>20+</span>
                            <span className='text-xs text-white'>Completed Projects</span>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <span className='text-lg text-yellow-500 font-bold'>20+</span>
                            <span className='text-xs text-white'>Freelance Clients</span>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <span className='text-lg text-yellow-500 font-bold'>20+</span>
                            <span className='text-xs text-white'>Honors & Awards</span>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <span className='text-lg text-yellow-500 font-bold'>20+</span>
                            <span className='text-xs text-white'>Opensource Projects</span>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default home