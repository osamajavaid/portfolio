import React from 'react'
import CardLayout from '../Common/CardLayout'

const Exp_Card = ({ data }) => {
    return (
        <CardLayout>
            <div className="card_stylings transition px-8 py-10 mt-4 ">
                <div className="flex-initial text-[17px] text-Snow font-medium">{data.title}</div>
                <div className="text-sm text-LightGray font-normal italic mt-1 ">
                    {data.role}
                </div>
                <div className="text-LightGray text-xs opacity-50 font-normal italic">
                    <a href={`${data.url}`} target="_blank" rel="noreferrer">
                        {data.url}
                    </a>
                </div>
                <div className="text-LightGray text-sm font-normal mt-4 text-justify">
                    {data.desc}
                </div>
                <div className="flex justify-between text-LightGray bg-DeepNightBlack w-full h-auto text-xs rounded-full py-3 px-6 mt-4 font-normal opacity-50">
                    <div>{data.year}</div> <div>{data.location}</div>
                </div>
            </div>
        </CardLayout>
    )
}

export default Exp_Card