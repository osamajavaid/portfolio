import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [urdu, setUrdu] = useState(0)
    const [english, setEnglish] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (urdu < 98) {
                setUrdu(prevCount => prevCount + 1);
            }
            if (english < 88) {
                setEnglish(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [urdu, english])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-white text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#facc15" type="circle" percent={urdu} size={75} />
                        <span className='text-xs font-bold text-white'>Urdu</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#d97706" type="circle" percent={english} size={75} />
                        <span className='text-xs font-bold text-white'>English</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages