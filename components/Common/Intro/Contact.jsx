import React from 'react'

const Contact = () => {
    return (
        <div className="flex flex-col space-y-2 pt-6">
            <div className="flex flex-col">
                <span className='text-Snow text-xs font-bold'>Email Address</span>
                <span className='text-xs text-gray-600'>iosamajavaid@gmail.com</span>
            </div>
            <div className="flex flex-col">
                <span className='text-Snow text-xs font-bold'>Phone</span>
                <span className='text-xs text-gray-600'>+923159591822</span>
            </div>

        </div>
    )
}

export default Contact