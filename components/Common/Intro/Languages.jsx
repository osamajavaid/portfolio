import { Progress } from "antd"

const Languages = () => {
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-white text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress className="text-white" type="circle" percent={98} size={75} />
                        <span className='text-xs font-bold text-white'>Urdu</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress type="circle" percent={86} size={75} />
                        <span className='text-xs font-bold text-white'>English</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages