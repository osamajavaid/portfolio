import { MdLocationOn } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'

const ReviewCard = ({ data }) => {
    return (
        <div className="flex flex-col justify-between bg-[#20202a] w-80 md:w-96 h-full  p-4 md:p-8">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-white font-bold">{data?.clientName}</span>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                        <MdLocationOn />
                        <em>{data?.clientLocation}</em>
                    </div>
                </div>
                <span className='text-sm text-gray-500 font-bold'>{data?.clientSource}</span>
            </div>
            <div className="text-sm mt-2 text-gray-500 font-normal ">
                {data.clientReview}
            </div>
            <div className="flex gap-2 items-center justify-center bg-black/25 w-6/12 md:w-5/12 text-xs text-yellow-500 rounded-full p-2 mt-4 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
        </div>
    )
}

export default ReviewCard