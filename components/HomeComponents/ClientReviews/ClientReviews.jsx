import ReviewCard from "./ReviewCard"

const reviewCard = [
    {
        id: 0,
        clientName: 'Mustafash',
        clientLocation: 'Egypt',
        clientSource: 'Fiverr',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
    {
        id: 2,
        clientName: 'Mustafash',
        clientLocation: 'Egypt',
        clientSource: 'Fiverr',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
    {
        id: 3,
        clientName: 'Mustafash',
        clientLocation: 'Egypt',
        clientSource: 'Fiverr',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
    {
        id: 4,
        clientName: 'Mustafash',
        clientLocation: 'Egypt',
        clientSource: 'Fiverr',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
]

const ClientReviews = () => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-white">Clients Reviews</div>
            <div className="overflow-auto w-full grid  justify-items-center grid-flow-col gap-4 px-2 md:px-8">

                {reviewCard.map((data, key) => <ReviewCard key={key} data={data} />)}

            </div>

        </>
    )
}

export default ClientReviews