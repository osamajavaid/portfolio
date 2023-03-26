import RecommendationCard from "./RecommendationCard"

const recommendationCard = [
    {
        id: 0,
        name: 'Adam Murphy',
        designation: 'GSR MERL | Grad student at UC Santa Cruz',
        view: "Osama is a great student who is an enthusiastic learner. He is always ready to learn new skills and is a very hard worker. His leadership skills are maturing and he is in the right direction for success.",
        linkednURL: "#"
    },
    {
        id: 1,
        name: 'Adam Murphy',
        designation: 'GSR MERL | Grad student at UC Santa Cruz',
        view: "Osama is a great student who is an enthusiastic learner. He is always ready to learn new skills and is a very hard worker. His leadership skills are maturing and he is in the right direction for success.",
        linkednURL: "#"
    },
    {
        id: 2,
        name: 'Adam Murphy',
        designation: 'GSR MERL | Grad student at UC Santa Cruz',
        view: "Osama is a great student who is an enthusiastic learner. He is always ready to learn new skills and is a very hard worker. His leadership skills are maturing and he is in the right direction for success.",
        linkednURL: "#"
    },
    {
        id: 3,
        name: 'Adam Murphy',
        designation: 'GSR MERL | Grad student at UC Santa Cruz',
        view: "Osama is a great student who is an enthusiastic learner. He is always ready to learn new skills and is a very hard worker. His leadership skills are maturing and he is in the right direction for success.",
        linkednURL: "#"
    },
]
const Recommendations = () => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-white">Recommendations</div>
            <div className="grid h-full mt-5 justify-items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-12 px-2 md:px-8 pb-8">

                {recommendationCard.map((data, key) => <RecommendationCard key={key} data={data} />)}

            </div>
        </>
    )
}

export default Recommendations