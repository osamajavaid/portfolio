import React from 'react'

const Exp_Card = ({ data }) => {
    return (
        <div className="bg-[#20202a] px-8 py-10 mt-4 ">
            <div className="flex-initial text-[17px] text-white font-medium">{data.title}</div>
            <div className="text-sm text-gray-500 font-normal italic mt-1 ">
                {data.role}
            </div>
            <div className="text-gray-500 text-xs opacity-50 font-normal italic">
                <a href={`${data.url}`} target="_blank" rel="noreferrer">
                    {data.url}
                </a>
            </div>
            <div className="text-gray-500 text-sm font-normal mt-4 text-justify">
                {data.desc}
            </div>
            <div className="flex justify-between text-gray-500 bg-[#161a23] w-full h-auto text-xs rounded-full py-3 px-6 mt-4 font-normal opacity-50">
                <div>{data.year}</div> <div>{data.location}</div>
            </div>
        </div>
    )
}

export default Exp_Card