import { navLinks } from '@/constants/navLinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BurgerIcon from './BurgerIcon'

export default function Navbar() {

    return (
        <header className="fixed h-[12vh] z-[10]  bg-[#0f0715] w-full">
            <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
                {/*Logo */}
                <Image
                    src="/images/logo1.png"
                    alt="Logo"
                    width={90}
                    height={90}
                    className="ml-[-1.5rem] am:ml-0"
                />
                {/*Nav Links */}

                <nav className="flex items-center space-x-10">
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                            >
                                <p className="relative text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 hover:after:w-full after:h-[4px] after:bg-yellow-400 after:transition-all after:duration-300"
                                >{link.label}</p>
                            </Link>
                        ))}
                    </div>
                </nav>
                {/*Hire Button */}
                <Link href="#contacts" className="flex items-center space-x-4">
                    <button className="hidden lg:flex md:px-10 md:py-3 px-8 py-3 text-[#0f0715] font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer">Hire me</button>
                </Link>
                {/*Burger */}
                <div className="lg:hidden">
                    <BurgerIcon />
                </div>
            </div>
        </header >
    )
}
