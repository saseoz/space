'use client';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Nav({ handleBtn, isMenuOpen }: {handleBtn: () => void; isMenuOpen: boolean;}) {
    const menuItems = [
        { name: 'Home', href: '/', num: '00' },
        { name: 'Destination', href: '/destination', num: '01' },
        { name: 'Crew', href: '/crew', num: '02' },
        { name: 'Technology', href: '/tech', num: '03' },
    ]
    const pathname = usePathname();

    return (
        <nav className={`flex xs:justify-end xs:items-center z-50 w-full ${isMenuOpen ? 'left-0' : 'left-full'}
        max-[550px]:fixed max-[550px]:top-0 max-[550px]:bottom-0 max-[550px]:right-0 transition-[left] duration-300 ease-in`}>
            <div onClick={handleBtn} className="xs:hidden w-2/5"></div>
            <div className="nav-list w-full blur-effect flex flex-col xs:justify-end xs:flex-row
            max-[550px]:pl-6 max-[550px]:pt-10 max-[550px]:pr-6">
                <button onClick={handleBtn} className="flex justify-end xs:hidden pb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg>
                </button>
                <ul className="flex flex-col xs:flex-row">
                    {menuItems.map((item, index) => (
                        <li key={index} className='xs:py-6 font-barlowCon tracking-[2px] max-[550px]:flex'>
                            <Link href={item.href} className={`uppercase max-[550px]:w-full
                                ${pathname === item.href ? 'nav-indicator' : ''}`}>
                                <span className="font-bold max-[550px]:pr-3">{item.num}</span>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
