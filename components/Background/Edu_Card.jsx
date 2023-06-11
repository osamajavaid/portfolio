import React from 'react'

const Edu_Card = ({ data }) => {
    return (
        <div className="bg-[#20202a] px-8 py-10 mt-4 md:mr-12">
            <div className="flex justify-between">
                <div className="flex-initial text-[17px] text-white font-medium">{data.title}</div>
                <div className="flex justify-items-center justify-center text-gray-500 bg-[#161a23] ml-2 w-32 lg:w-28 h-10 text-xs rounded-full py-3 font-normal opacity-50 text-center">
                    {" "}
                    {data.year}{" "}
                </div>
            </div>
            <div className="text-xs text-gray-500 font-normal italic mt-1 ">
                {data.degree}
            </div>
            <div className="text-gray-500 text-sm font-normal mt-4 ">
                {data.detail}
            </div>
        </div>
    )
}

export default Edu_Card