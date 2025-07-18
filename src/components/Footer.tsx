import { navLinks } from '@/constants/navLinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="py-16 bg-[#0f0715]">
      <div>
        <Image
          src="/images/logo1.png"
          alt="Logo"
          width={90}
          height={90}
          className="mx-auto"
        />
      </div>
      <div className=" flex justify-center items-center space-x-10">
        <div className=" lg:flex items-center space-x-8 text-center">
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
      </div>
      <p className="text-white text-opacity-60 mt-6 text-center">
        © 2025 All Rights Reserved by Abdelrahman Hamada
      </p>
    </div>
  )
}
