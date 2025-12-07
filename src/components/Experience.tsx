import React from "react";
import SectionHeading from "./SectionHeader";

export default function Experience() {
    const experiences = [
        {
            company: "B-circles",
            role: "Front-End Developer",
            date: "Jan 2025 – Mar 2025 | Giza, Egypt",
            description: [
                "Collaborated with existing clients to troubleshoot and enhance their websites, ensuring optimal functionality and user experience.",
                "Developed new, responsive web applications using modern technologies such as JavaScript, React.js, Next.js, and Tailwind CSS.",
                "Used Git and GitHub for version control and team collaboration, maintaining clean code practices and efficient workflow across development tasks.",
                "Integrated RESTful APIs and optimized data handling to improve application functionality, responsiveness, and load times.",
            ],
        },
        {
            company: "Web Masters",
            role: "Front-End Intern",
            date: "Mar 2025 – Jul 2025 | Giza, Egypt",
            description: [
                "Built responsive websites from scratch using JavaScript, focusing on clean DOM manipulation and interactive UI components.",
                "Utilized Tailwind CSS and Bootstrap to create visually appealing, mobile-friendly designs.",
                "Developed dynamic front-end applications using React.js, Redux, and Axios, applying a component-based architecture and React hooks for efficient state and data management.",
                "Gained hands-on experience collaborating within a front-end team, contributing to shared codebases using Git and GitHub, managing tasks efficiently, and maintaining effective communication through team-based workflows.",
            ],
        },
        {
            company: "OVARC (Profolio Product)",
            role: "Front-End Intern",
            date: "Aug 2025 – Oct 2025",
            description: [
                "Completed a front-end development internship focused on managing startups and employee operations (payroll, leaves, contracts, etc.).",
                "Developed responsive, scalable UIs using React.js, TypeScript, Redux, and TanStack Query for efficient state management.",
                "Built reusable UI components with native CSS, ensuring consistency and performance.",
                "Collaborated with backend developers on SQL database integration, and worked with Docker in a Linux environment.",
                "Engaged in code reviews and Agile processes, addressing feedback, testing fixes, and participating in Scrum-based sprints using Jira.",
                "Collaborated with the team using Git and GitHub for version control, code collaboration, and maintaining clean project workflows.",
            ],
            letterLink: "/assets/ovarc-experience-letter.pdf",
        },
    ];

    return (
        <section id="experience" className="bg-[#0f0715] py-20">
            <SectionHeading>Experience</SectionHeading>

            <div className="w-[85%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                     
                        className="border border-gray-800 bg-[#0f0f1a] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <h3 className="text-[#8750f7] text-xl font-semibold mb-1">
                            {exp.company}
                        </h3>
                        <p className="text-gray-400 text-sm italic">{exp.role}</p>
                        <p className="text-gray-500 text-sm mb-4">{exp.date}</p>

                        <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm mb-6">
                            {exp.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>

                        {exp.letterLink && (
                            <button
                                className="w-full sm:w-auto px-6 py-2.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg bg-blue-700 hover:bg-blue-900"
                            >
                                <a
                                    href="/Abdelrahman-Hamada-Frontend-Experience-Letter.pdf"
                                    download
                                    className="flex items-center justify-center gap-2"
                                >
                                    <span>Download Experien Letter</span>
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
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
