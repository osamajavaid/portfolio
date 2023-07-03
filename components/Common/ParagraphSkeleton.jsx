import React from 'react'

const ParagraphSkeleton = ({ className }) => {
    return (

        <div role="status" class={`max-w-sm animate-pulse bg-[#20202a] self-center ${className}`}>
            <div class="h-2.5 rounded-full bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 rounded-full bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-700 mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-700 max-w-[360px]"></div>
            <span class="sr-only">Loading...</span>
        </div>

    )
}

export default ParagraphSkeleton