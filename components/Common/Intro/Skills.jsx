import LinearBar from "./LinearBar"

const Skills = () => {
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold bg-gradient-to-bl'>Skills and Competencies</span>
                <div className="flex flex-col space-y-4">
                    <LinearBar title='Frontend Development' percent='96%' bgColor="bg-Green" />
                    <LinearBar title='Backend Development' percent='67%' bgColor="bg-Green" />
                    <LinearBar title="Rest API's" percent='94%' bgColor="gradie bg-Green" />
                    <LinearBar title='Designing (UI/UX)' percent='66%' bgColor="bg-Green" />
                    <LinearBar title='Creativity' percent='83%' bgColor="bg-Green" />

                </div>
            </div>

        </div>
    )
}

export default Skills