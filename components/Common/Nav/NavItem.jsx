import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'


const NavItem = ({ NavIcon, NavText, NavRoute, setIsOpen }) => {
    const router = useRouter();
    const className = router.asPath === `${NavRoute}` ? "rounded-xl !text-DeepNightBlack bg-Green font-bold tracking-widest" : '';

    return (
        <Link
            onClick={(e) => setIsOpen(false)}
            href={NavRoute}
            className={`${className} transition flex items-center px-2 hover:bg-EveningBlack text-SilverGray hover:text-SilverGray rounded-xl  py-1.5 font-semibold space-x-4 text-base`}
        >
            {NavIcon}
            <span>{NavText}</span>
        </Link>
    )
}

export default NavItem