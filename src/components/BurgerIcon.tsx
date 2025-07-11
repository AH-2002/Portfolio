"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";

export default function BurgerIcon() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Burger Button */}
            <button onClick={() => setIsOpen(true)} aria-label="Open menu">
                <svg
                    className="w-8 h-8 text-white cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Overlay & Sidebar */}
            {isOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Sidebar */}
                    <div className="text-white fixed flex flex-col justify-between py-5  top-0 left-0 h-full w-[80%] sm:w-[60%] z-[1001] bg-[#0f0715] space-x-6 px-5">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="self-end"
                            aria-label="Close menu"
                        >
                            <svg
                                className="w-8 h-8 text-white cursor-pointer"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex flex-col justify-center h-[50%]">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}

                                >
                                    <p className="relative inline-block text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 hover:after:w-full after:h-[4px] after:bg-yellow-400 after:transition-all after:duration-300
                                                    text-[20px]sm: text-[30px] mb-5">{link.label}</p>
                                </Link>
                            ))}
                        </div>

                        <Link href="#">
                            <button className="mt-6 w-full py-2 bg-white text-[#0f0715] font-semibold rounded-lg hover:bg-gray-200 transition duration-200">
                                Hire me
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </>
    );
}
