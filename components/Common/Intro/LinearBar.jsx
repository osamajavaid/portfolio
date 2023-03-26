import React from 'react'

const LinearBar = ({ title, percent }) => {
    return (
        <div className="">
            <div className="flex justify-between mb-1">
                <span className="text-xs text-white">{title}</span>
                <span className="text-xs text-white">{percent}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-yellow-500 h-2.5 rounded-full w-16" style={{ width: `${percent}` }}></div>
            </div>
        </div>
    )
}

export default LinearBar