import { useState } from "react";
import ReviewCard from "./ReviewCard"
import axios from "axios";
import { useQuery } from "react-query";
import { Skeleton } from 'antd';



const ClientReviews = () => {

    const { isLoading, error, data } = useQuery('review', () =>
        axios.get('api/review')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))


    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-white">Clients Reviews</div>
            <div className="overflow-auto w-full grid  justify-items-center grid-flow-col gap-4 px-2 md:px-8">

                {
                    data?.map((data, key) => (
                        <Skeleton active round loading={isLoading} >
                            <ReviewCard key={key} data={data} />
                        </Skeleton>
                    ))}

            </div>

        </>
    )
}

export default ClientReviews