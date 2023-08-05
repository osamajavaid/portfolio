import LinearBar from "./LinearBar"

const Skills = () => {
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-white text-xs font-bold bg-gradient-to-bl'>Skills and Competencies</span>
                <div className="flex flex-col space-y-4">
                    <LinearBar title='Frontend Development' percent='96%' bgColor="bg-green-500" />
                    <LinearBar title='Backend Development' percent='67%' bgColor="bg-yellow-600" />
                    <LinearBar title="Rest API's" percent='94%' bgColor="gradie bg-green-400" />
                    <LinearBar title='Designing (UI/UX)' percent='66%' bgColor="bg-lime-300" />
                    <LinearBar title='Creativity' percent='83%' bgColor="bg-orange-400" />

                </div>
            </div>

        </div>
    )
}

export default Skills