import React from 'react'
import CardLayout from '../../Common/CardLayout'

const RecommendationCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="backdrop-filter rounded-xl backdrop-blur-xl p-8 h-full relative bg-EveningBlack/95 hover:bg-EveningBlack/80 transition">
                <img src={data?.image} className="absolute z-10 right-10 -top-5 border-Green w-16 h-16  border-[3px] rounded-full m-0" />
                <div className=" text-Snow underline italic">
                    <a href={data?.linkednURL} target="_blank" rel="noreferrer">{data?.name}</a>
                </div>
                <div className="text-xs text-LightGray font-normal italic mt-1 ">{data?.designation}</div>
                <div className="text-sm mt-2 text-LightGray font-normal ">{data?.view}</div>
            </div>
        </CardLayout>
    )
}

export default RecommendationCard