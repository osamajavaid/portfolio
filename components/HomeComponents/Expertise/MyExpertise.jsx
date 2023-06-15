import { useState } from "react";
import ExpertiseCard from "./ExpertiseCard"
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from 'antd';


const MyExpertise = () => {

    const { isLoading, error, data } = useQuery('expertise', () =>
        axios.get('api/expertise')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-white">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >
                {
                    data?.map((data, key) => (
                        <Skeleton active round loading={isLoading} >
                            <ExpertiseCard key={key} data={data} />
                        </Skeleton>
                    ))

                }
            </div>
        </>
    )
}

export default MyExpertise