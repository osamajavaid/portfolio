import LinearBar from "./LinearBar"

const Skills = () => {
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-white text-xs font-bold'>Skills and Competencies</span>
                <div className="flex flex-col space-y-4">
                    <LinearBar title='Frontend Development' percent='96%' />
                    <LinearBar title='Backend Development' percent='77%' />
                    <LinearBar title="Rest API's" percent='91%' />
                    <LinearBar title='Designing (UI/UX)' percent='66%' />
                    <LinearBar title='Creativity' percent='83%' />

                </div>
            </div>

        </div>
    )
}

export default Skills