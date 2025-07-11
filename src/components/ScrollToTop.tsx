"use client"
import React, { useEffect, useState } from 'react'
import { ArrowUpIcon } from "@heroicons/react/24/solid";


export default function ScrollToTop() {
  const [isVisible, setIsvisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsvisible(true);
      } else {
        setIsvisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])
  const ScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <button onClick={ScrolltoTop} className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none  ">
          <ArrowUpIcon className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  )
}
