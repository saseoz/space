'use client'
import React from 'react'
import Nav from './nav/page'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleBtn = () => {
        setIsMenuOpen(isMenuOpen => !isMenuOpen)
    }
    return (
        <header className="flex justify-between h-fit w-full md:pt-10 
        max-[550px]:py-6">
            <div className="max-xs:pl-6 logo-wrap flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
            </div>
            <div className="relative self-center w-full hidden md:flex border-b border-white ">
                <hr className="absolute w-full color-white -right-6 z-50" />
            </div>
            <Nav handleBtn={handleBtn} isMenuOpen={isMenuOpen} />
            <button onClick={handleBtn} className="self-center pr-6 xs:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
            </button>
        </header>
    )
}
