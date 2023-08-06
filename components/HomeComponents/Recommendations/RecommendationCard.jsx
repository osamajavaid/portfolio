import React from 'react'
import CardLayout from '../../Common/CardLayout'

const RecommendationCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="p-8 h-full relative card_stylings transition">
                <img src={data?.image} className="absolute z-10 right-10 -top-5 border-Green w-16 h-16  border-[3px] rounded-full m-0" />
                <div className=" text-Snow underline italic">
                    <a href={data?.linkednURL} target="_blank" rel="noreferrer">{data?.name}</a>
                </div>
                <div className="text-xs text-LightGray italic mt-1">{data?.designation}</div>
                <div className="text-sm mt-2 text-LightGray font-normal ">{data?.view}</div>
            </div>
        </CardLayout>
    )
}

export default RecommendationCard