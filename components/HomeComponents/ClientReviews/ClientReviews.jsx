import { useState } from "react";
import ReviewCard from "./ReviewCard"
import axios from "axios";
import { useQuery } from "react-query";



const ClientReviews = () => {
    const [isData, setIsData] = useState([]);

    const { isLoading, error, data } = useQuery('review', () =>
        axios.get('api/review')
            .then(({ data }) => setIsData(data))
            .catch(error => console.error('Error fetching testimonials:', error)))


    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-white">Clients Reviews</div>
            <div className="overflow-auto w-full grid  justify-items-center grid-flow-col gap-4 px-2 md:px-8">

                {isData.map((data, key) => <ReviewCard key={key} data={data} />)}

            </div>

        </>
    )
}

export default ClientReviews