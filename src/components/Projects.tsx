"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeader";
import { projects } from "@/constants/projectsInfo";
import { projectsType } from "@/types/projectsType";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "UI" | "dev">("all");

  // Filtered projects based on the selected type
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "UI") return project.type === "UI";
    if (filter === "dev") return project.type === "frameWork" || project.type === "JS";
    return true;
  });

  return (
    <section id="projects" className="bg-[#0f0715] py-20">
      <SectionHeading>Projects</SectionHeading>

      {/* ✅ Filter Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${filter === "all"
              ? "bg-[#8750f7] text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
        >
          All
        </button>
        <button
          onClick={() => setFilter("UI")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${filter === "UI"
              ? "bg-[#8750f7] text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
        >
          UI Only
        </button>
        <button
          onClick={() => setFilter("dev")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${filter === "dev"
              ? "bg-[#8750f7] text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
        >
          Frame works & JS
        </button>
      </div>

      {/* ✅ Project Cards */}
      <div className="grid gap-12 mt-16 px-6 md:px-12 lg:px-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project: projectsType, index) => (
          <div
            key={index}
            className="bg-[#0f0f1a] border border-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col h-[460px]"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${index * 100}`}
          >
            {/* Image */}
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
