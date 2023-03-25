import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";

const portfolio = () => {
    return (
        <BannerLayout>
            <div class="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">

                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
            </div>
            <Footer />
        </BannerLayout>
    );
};

export default portfolio;
