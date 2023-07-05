import React from 'react'
import CardLayout from '../../Common/CardLayout'

const RecommendationCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="backdrop-filter backdrop-blur-xl bg-[#20202a]/95 p-8 h-full relative hover:bg-[#20202a]/90 transition">
                <img src={data?.image} className="absolute z-10 right-10 -top-5 border-yellow-500 w-16 h-16  border-2 rounded-full m-0" />
                <div className=" text-white">
                    <a href={data?.linkednURL} target="_blank" rel="noreferrer">{data?.name}</a>
                </div>
                <div className="text-xs text-gray-500 font-normal italic mt-1 ">{data?.designation}</div>
                <div className="text-sm mt-2 text-gray-500 font-normal ">{data?.view}</div>
            </div>
        </CardLayout>
    )
}

export default RecommendationCard