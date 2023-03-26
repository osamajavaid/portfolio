import React from 'react'

const RecommendationCard = () => {
    return (
        <div className="bg-main-color h-full relative">
            <div className="bg-[#20202a] p-8 h-full relative">
                <img src="images/avtar.png" className="absolute z-10 right-10 -top-5 border-yellow-500 w-16 h-16  border-2 rounded-full m-0" />
                <div className=" text-white">
                    <a href="https://www.linkedin.com/in/muhammad-hadir-khan-771941162/" target="_blank">Murphy Adam</a>
                </div>
                <div className="text-xs text-gray-500 font-normal italic mt-1 ">GSR MERL | Grad student at UC Santa Cruz</div>
                <div className="text-sm mt-2 text-gray-500 font-normal "> Osama is a great student who is an enthusiastic learner. He is always ready to learn new skills and is a very hard worker. His leadership skills are maturing and he is in the right direction for success.</div>
            </div>
        </div>
    )
}

export default RecommendationCard