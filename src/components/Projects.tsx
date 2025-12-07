import { projectsType } from "@/types/projectsType";
import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeader";
import { projects } from "@/constants/projectsInfo";
export default function Projects() {
  return (
    <section id="projects" className="bg-[#0f0715] py-20">
      <SectionHeading>Projects</SectionHeading>

      <div className="grid gap-12 mt-20 px-6 md:px-12 lg:px-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: projectsType, index) => (
          <div
            key={index}
            className="bg-[#0f0f1a] border border-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col h-[460px]"
          >
            {/* Image Wrapper with fixed height and relative positioning */}
            <div className="relative w-full h-[200px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-auto justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8750f7] hover:bg-[#6d3fd0] text-white px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  GitHub Repo
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
