const Recommendations = () => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-white">Recommendations</div>
            <div className="grid h-full mt-5 justify-items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-12 px-2 md:px-8 pb-8">
                <div className="bg-main-color h-full relative">
                    <div className="bg-[#20202a] p-8 h-full relative">
                        <img src="https://devfolio-rawheel.s3.amazonaws.com/images/hadir.jpeg" className="absolute z-10 right-10 -top-5 border-yellow w-16 h-16  border-2 rounded-full m-0" />
                        <div className=" text-white">
                            <a href="https://www.linkedin.com/in/muhammad-hadir-khan-771941162/" target="_blank">Muhammad Hadir Khan</a>
                        </div>
                        <div className="text-xs text-gray-500 font-normal italic mt-1 ">GSR MERL | Grad student at UC Santa Cruz</div>
                        <div className="text-sm mt-2 text-gray-500 font-normal "> Raheel is a great student who is an enthusiastic learner. He is always ready to learn new skills and is a very hard worker. His leadership skills are maturing and he is in the right direction for success.</div>
                    </div>
                </div>
                <div className="bg-main-color h-full relative">
                    <div className="bg-[#20202a] p-8 h-full relative">
                        <img src="https://devfolio-rawheel.s3.amazonaws.com/images/ayesha.jpeg" className="absolute z-10 right-10 -top-5 border-yellow w-16 h-16  border-2 rounded-full m-0" />
                        <div className=" text-white">
                            <a href="https://www.linkedin.com/in/ayesha-saeed-756324147/" target="_blank">Ayesha Saeed</a>
                        </div>
                        <div className="text-xs text-gray-500 font-normal italic mt-1 ">Wikipedia Specialist/Writer at Innovative Network Pvt Ltd</div>
                        <div className="text-sm mt-2 text-gray-500 font-normal "> Raheel is one of the most hardworking juniors I have come across. He knows how to come up with new ideas and implement them with ease. His vision is crystal clear to him which is something required for a successful future.</div>
                    </div>
                </div>
                <div className="bg-main-color h-full relative">
                    <div className="bg-[#20202a] p-8 h-full relative">
                        <img src="https://devfolio-rawheel.s3.amazonaws.com/images/kumail.jpeg" className="absolute z-10 right-10 -top-5 border-yellow w-16 h-16  border-2 rounded-full m-0" />
                        <div className=" text-white"><a href="https://www.linkedin.com/in/mkumail1/" target="_blank">Muhammad Kumail</a>
                        </div>
                        <div className="text-xs text-gray-500 font-normal italic mt-1 ">Blockchain Developer | MERN Stack | β Microsoft LSA | Former Google DSC Lead | AWS Cloud Ambassador | Global Leader at UNAI</div>
                        <div className="text-sm mt-2 text-gray-500 font-normal "> Raheel is a really talented individual who has a keen desire for solving complex problems. I worked over several events with him in DSC and he is certainly one of the most dedicated personality I ever came across with. I wish him the best of luck for his future endeavours.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recommendations