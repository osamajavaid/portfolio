import React from 'react'
import CardLayout from './CardLayout'

const ParagraphSkeleton = ({ className }) => {
    return (

        <CardLayout>
            <div role="status" class={`max-w-full animate-pulse bg-MidNightBlack self-center ${className}`}>
                <div class="h-2.5 rounded-full bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 rounded-full bg-gray-700 max-w-[365px] mb-2.5"></div>
                <div class="h-2 rounded-full bg-gray-700 mb-2.5"></div>
                <div class="h-2 rounded-full bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 rounded-full bg-gray-700 max-w-[400px] mb-2.5"></div>
                <div class="h-2 rounded-full bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div>
        </CardLayout>

    )
}

export default ParagraphSkeleton