const Languages = () => {
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-white text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-1">
                        <div className="radial-progress text-orange-400" style={{ "--value": 94, "--size": '4rem' }}>98%</div>
                        <span className='text-xs font-bold text-white'>Urdu</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-1">
                        <div className="radial-progress text-orange-400" style={{ "--value": 85, "--size": '4rem' }}>90%</div>
                        <span className='text-xs font-bold text-white'>English</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages