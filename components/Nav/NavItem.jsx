import Link from 'next/link'
import React from 'react'


const NavItem = ({ NavIcon, NavText, NavRoute }) => {
    return (
        <Link href={NavRoute} className="flex items-center px-2 hover:bg-yellow-500 text-gray-400 hover:text-gray-900 hover:font-bold py-1 font-bold space-x-4 text-lg">
            {NavIcon}
            <span>{NavText}</span>
        </Link>
    )
}

export default NavItem