import React from 'react'

const CardLayout = ({ children, className = "h-full" }) => {
    return (
        <div className={`${className} rounded-2xl`}
            style={{
                backgroundImage: `url(images/card-bg.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'inherit',
                backgroundPosition: 'right',
                width: '100%',
            }}
        >
            {children}
        </div>
    )
}

export default CardLayout