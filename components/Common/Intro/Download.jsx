const Download = ({ icon }) => {
    return (
        <>
            <a href="/osamajavaid-resume.pdf" download id="scroll-intro" className="flex flex-row text-gray-500 items-center gap-x-4 py-8 pt-4">
                <span className="text-white">Download Resume</span>
                <span>{icon}</span>
            </a>
            <div className="">
                {/* f */}
            </div>
        </>
    )
}

export default Download