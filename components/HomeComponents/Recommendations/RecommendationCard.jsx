import React from 'react'

const RecommendationCard = ({ data }) => {
    return (
        <div className="bg-main-color h-full relative">
            <div className="bg-[#20202a] p-8 h-full relative">
                <img src="images/avtar.png" className="absolute z-10 right-10 -top-5 border-yellow-500 w-16 h-16  border-2 rounded-full m-0" />
                <div className=" text-white">
                    <a href={data?.linkednURL} target="_blank">{data?.name}</a>
                </div>
                <div className="text-xs text-gray-500 font-normal italic mt-1 ">{data?.designation}</div>
                <div className="text-sm mt-2 text-gray-500 font-normal ">{data?.view}</div>
            </div>
        </div>
    )
}

export default RecommendationCard