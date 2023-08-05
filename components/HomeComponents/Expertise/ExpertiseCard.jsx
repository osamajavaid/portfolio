import CardLayout from "../../Common/CardLayout"

const ExpertiseCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="rounded-xl h-full backdrop-filter backdrop-blur-xl  space-y-2 p-8 bg-EveningBlack/95 hover:bg-EveningBlack/80 transition">
                <div className=" text-Snow">{data.title}</div>
                <div className="text-sm text-LightGray font-normal ">
                    {data.desc}
                </div>
            </div>
        </CardLayout>
    )
}

export default ExpertiseCard