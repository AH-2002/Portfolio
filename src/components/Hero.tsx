import { personalInfo } from '@/constants/PersonalInfo'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="w-full h-screen bg-[#0f0715] overflow-hidden relative pt-[4vh] md:pt-[12vh] flex justify-between items-center">
      <div className="flex flex-col justify-center w-[50%] h-full mx-auto">
        <div className="name">
          <h1 data-aos="fade-left" className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
            I am {personalInfo.name}
          </h1>
        </div>
        <div data-aos="fade-right" data-aos-delay="100" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent">
          <p>{personalInfo.position}</p>
        </div>

        <div data-aos="fade-left" data-aos-delay="200" className="description my-6 text-sm md:text-base text-gray-300">
          <p>{personalInfo.description}</p>
        </div>
        <div className="hero-button flex justify-start">
          <button data-aos="zoom-in" data-aos-delay="300" className="md:pc-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900">
            <a href="/Abdelrahman-Hamada-Frontend-Resume.pdf"
              download
              className="flex items-center space-x-2">
              <span>
                Download CV
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </a>
          </button>
          <button data-aos="zoom-out" data-aos-delay="300" className="ml-5 md:pc-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-[#8750f7] hover:bg-[#6d3fd0]">
            <a
              href="https://github.com/AH-2002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2">

              <span>Visit GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.21 11.418c.6.112.82-.26.82-.577v-2.045c-3.338.727-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.082-.73.082-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.832 2.807 1.303 3.492.996.108-.774.419-1.303.763-1.603-2.665-.305-5.467-1.334-5.467-5.934 0-1.31.47-2.381 1.236-3.22-.124-.304-.536-1.526.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.006-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.65.243 2.872.12 3.176.77.839 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.922.43.372.823 1.102.823 2.222v3.293c0 .32.216.694.825.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>

            </a>
          </button>

        </div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="400"
        className="personalImage mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden">
        <Image
          src={personalInfo.profilePic}
          alt="Profile Picture"
          width={400}
          height={400}
        />
      </div>
    </section>
  )
}
