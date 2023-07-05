import CardLayout from "../../Common/CardLayout"

const ExpertiseCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="h-full backdrop-filter backdrop-blur-xl bg-[#20202a]/95 space-y-2 p-8 hover:bg-[#20202a]/80 transition">
                <div className=" text-white">{data.title}</div>
                <div className="text-sm text-gray-500 font-normal ">
                    {data.desc}
                </div>
            </div>
        </CardLayout>
    )
}

export default ExpertiseCard