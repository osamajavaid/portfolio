import { useEffect, useState } from "react";
import RecommendationCard from "./RecommendationCard"
import axios from "axios";
import { useQuery } from "react-query";
import { Skeleton } from 'antd';


const Recommendations = () => {
    const { isLoading, error, data } = useQuery('recommendations', () =>
        axios.get('api/recommendations')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))


    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-white">Recommendations</div>
            <div className="grid h-full mt-5 justify-items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-12 px-2 md:px-8 pb-8">

                {
                    data?.map((data, key) => (
                        <Skeleton active round loading={isLoading} >
                            <RecommendationCard key={key} data={data} />
                        </Skeleton>
                    ))
                }

            </div>
        </>
    )
}

export default Recommendations