import Image from 'next/image'
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
      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <div>Skills</div>
        <div>Contact</div>
      </div>
      <p className="text-white text-opacity-60 mt-6 text-center">
      © 2025 All Rights Reserved by Abdelrahman Hamada
      </p>
    </div>
  )
}
