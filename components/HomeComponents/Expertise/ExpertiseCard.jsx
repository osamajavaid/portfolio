const ExpertiseCard = ({ data }) => {
    return (
        <div className="h-full">
            <div className="h-full bg-[#20202a] space-y-2 p-8">
                <div className=" text-white">{data.title}</div>
                <div className="text-sm text-gray-500 font-normal ">
                    {data.desc}
                </div>
            </div>
        </div>
    )
}

export default ExpertiseCard