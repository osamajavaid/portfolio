import { useState } from "react";
import ExpertiseCard from "./ExpertiseCard"
import { useQuery } from "react-query";
import axios from "axios";


const MyExpertise = () => {
    const [isData, setIsData] = useState([]);

    const { isLoading, error, data } = useQuery('expertise', () =>
        axios.get('api/expertise')
            .then(({ data }) => setIsData(data))
            .catch(error => console.error('Error fetching testimonials:', error)))

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-white">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

                {isData.map((data, key) => <ExpertiseCard key={key} data={data} />)}

            </div >
        </>
    )
}

export default MyExpertise