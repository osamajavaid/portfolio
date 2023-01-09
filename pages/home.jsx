const home = () => {
    return (
        <div className="PARENT">
            <div
                className="relative backdrop-blur-sm w-full h-72 bg-fixed"
                style={{
                    background: 'url(images/background.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    // opacity: '0.5'

                }}>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#161a23]">
                    <div className="flex items-center justify-center"></div>
                </div>
            </div>
        </div>
    )
}

export default home