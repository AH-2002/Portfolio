import { skills } from '@/constants/skillsInfo'
import Image from 'next/image'
import React from 'react'
import SectionHeading from './SectionHeader'

export default function Skills() {
  return (
    <section className="pt-16 pb-16 bg-[#050709]" id="skills">
      <SectionHeading>Skills</SectionHeading>
      <div id="skills-anchor"
        className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-stretch">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skillContainer min-h-[220px] flex flex-col justify-center items-center p-6 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-center rounded-lg bg-gray-900"
            data-aos="flip-left"
            data-aos-anchor="#skills-anchor"
            data-aos-anchor-placement="top-center"
          >
            <Image
              src={skill.image}
              alt={skill.title}
              width={80}
              height={80}
              className="object-contain mx-auto"
            />
            <div className="w-full bg-black mt-auto rounded-lg p-2 text-white opacity-40 text-center min-h-[40px] flex items-center justify-center">
              {skill.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
