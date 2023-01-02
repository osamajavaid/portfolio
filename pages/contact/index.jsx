import { useRouter } from 'next/router'
import React from 'react'

const contact = () => {
    const router = useRouter()
    console.log(router)
    return (
        <div>contact</div>
    )
}

export default contact