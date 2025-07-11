import React from 'react'
import SectionHeading from './SectionHeader'

export default function About() {
    return (
        <section id="about" className="relative pt-16 pb-16 bg-[#050709]">
            <SectionHeading>About me</SectionHeading>
            <div className="w-[80%] mx-auto mt-20 flex flex-col items-center justify-center">
                <div data-aos="fade-left" data-aos-anchor-placement="top-center" className="text-content">
                    <h1 className="text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold  bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent">Crafting Web Application with Passion and Precision</h1>
                    <p className="mt-6 text-base text-gray-500">
                        I’m a passionate Front-End Developer with a Bachelor’s degree in Computers and Artificial Intelligence from Cairo University. I enjoy creating clean, user-friendly web experiences and continuously improving my skills through real projects and teamwork. Driven by curiosity and a strong work ethic,
                        I aim to build responsive and efficient applications that make a positive impact on users.
                    </p>
                </div>

                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="150" className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-20 w-full px-4 max-w-6xl mx-auto">
                    {/* Left Side: Education & Experience */}
                    <div className="flex-1 flex flex-col gap-8">
                        {/* Education */}
                        <div className="border border-gray-700 p-6 rounded-lg bg-[#0f0f1a] shadow-md">
                            <h2 className="text-xl font-semibold mb-2 text-[#8750f7]">🎓 Education</h2>
                            <p className="text-base text-gray-300 leading-relaxed">
                                <span className="font-medium">Bachelor’s in Computers and Artificial Intelligence</span><br />
                                Cairo University (2020–2024)
                            </p>
                        </div>

                        {/* Experience */}
                        <div  className="border border-gray-700 p-6 rounded-lg bg-[#0f0f1a] shadow-md">
                            <h2 className="text-xl font-semibold mb-2 text-[#8750f7]">💼 Experience</h2>
                            <ul className="text-base text-gray-300 leading-relaxed space-y-4 list-disc list-inside">
                                <li>
                                    <span className="font-medium">Web Masters – Front-End Intern:</span><br />
                                    Created dynamic UIs with React and Bootstrap; focused on DOM manipulation with vanilla JS.
                                </li>
                                <li>
                                    <span className="font-medium">B-circles – Front-End Developer:</span><br />
                                    Developed and enhanced client websites using React, Next.js, and Tailwind CSS.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Tech Stack */}
                    <div className="flex-1 flex flex-col gap-4">
                        <h2 className="text-xl font-semibold mb-2 text-[#8750f7]">🧰 Tech Stack</h2>

                        <div className="flex gap-2 items-start">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            <p className="text-gray-300">Languages: HTML, CSS, JavaScript (ES6+), TypeScript, Python</p>
                        </div>

                        <div className="flex gap-2 items-start">
                            <span>
                                <svg className="h-5 w-5 text-green-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            <p className="text-gray-300">Frameworks: React.js, Next.js</p>
                        </div>

                        <div className="flex gap-2 items-start">
                            <span>
                                <svg className="h-5 w-5 text-green-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            <p className="text-gray-300">Styling: Tailwind CSS, Bootstrap, SASS</p>
                        </div>

                        <div className="flex gap-2 items-start">
                            <span>
                                <svg className="h-5 w-5 text-green-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            <p className="text-gray-300">State Management: Redux Toolkit, Context API</p>
                        </div>

                        <div className="flex gap-2 items-start">
                            <span>
                                <svg className="h-5 w-5 text-green-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            <p className="text-gray-300">Tools: Git & GitHub, VS Code, Postman, Chrome DevTools</p>
                        </div>

                        <div className="flex gap-2 items-start">
                            <span>
                                <svg className="h-5 w-5 text-green-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            <p className="text-gray-300">Other: Responsive design, Lazy loading, Performance optimization, WordPress</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
