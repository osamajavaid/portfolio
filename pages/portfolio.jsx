import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";

const portfolio = () => {
    const [isData, setIsData] = useState([]);

    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => setIsData(data))
            .catch(error => console.error('Error fetching testimonials:', error)))


    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    return (
        <BannerLayout>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">

                {isData.map((data, key) => <PortfolioCard key={key} data={data} />)}

            </div>
            <Footer />
        </BannerLayout>
    );
};

export default portfolio;
