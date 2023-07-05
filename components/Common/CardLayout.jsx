import React from 'react'

const CardLayout = ({ children }) => {
    return (
        <div className="h-full"
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