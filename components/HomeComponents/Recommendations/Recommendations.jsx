import RecommendationCard from "./RecommendationCard"

const Recommendations = () => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-white">Recommendations</div>
            <div className="grid h-full mt-5 justify-items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-12 px-2 md:px-8 pb-8">

                <RecommendationCard />
                <RecommendationCard />
                <RecommendationCard />
            </div>
        </>
    )
}

export default Recommendations