import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'


const NavItem = ({ NavIcon, NavText, NavRoute, setOpen }) => {
    const router = useRouter();
    const className = router.asPath === `${NavRoute}` ? "text-gray-900 bg-yellow-500" : '';

    return (
        <Link onClick={(e) => setOpen(false)} href={NavRoute} className={`${className} flex items-center px-2 hover:bg-yellow-500 text-gray-400 hover:text-gray-900 hover:font-bold py-1 font-bold space-x-4 text-lg`}>
            {NavIcon}
            <span>{NavText}</span>
        </Link>
    )
}

export default NavItem