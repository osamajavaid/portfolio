import { MdLocationOn } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
import CardLayout from '../../Common/CardLayout'

const ReviewCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="flex flex-col justify-between card_stylings w-80 md:w-96 h-full  p-4 md:p-8">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-Snow font-bold">{data?.clientName}</span>
                        <div className="text-xs text-LightGray flex items-center gap-1 font-light">
                            <MdLocationOn />
                            <em>{data?.clientLocation}</em>
                        </div>
                    </div>
                    <span className='text-sm text-LightGray font-light'>{data?.clientSource}</span>
                </div>
                <div className="text-sm mt-2 text-LightGray font-normal">
                    {data.clientReview}
                </div>
                <div className="flex gap-2 items-center justify-center bg-MidNightBlack w-6/12 md:w-5/12 text-xs text-Green rounded-full p-2 mt-4 ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
        </CardLayout>
    )
}

export default ReviewCard