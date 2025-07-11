import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor"
import ScrollToUp from "@/components/ScrollToTop";


const font = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Abdelrahman Hamada | Front-End Developer",
  description: "Portfolio of Abdelrahman Hamada, a passionate Front-End Developer skilled in React, Next.js, JavaScript, and building responsive, user-friendly web apps.",
  keywords: ["Abdelrahman Hamada", "Front-End Developer", "React", "Next.js", "JavaScript", "Portfolio", "Web Developer", "Frontend Engineer"],
  authors: [{ name: "Abdelrahman Hamada", url: "https://your-portfolio-domain.com" }],
  creator: "Abdelrahman Hamada",
  openGraph: {
    title: "Abdelrahman Hamada | Front-End Developer",
    description: "Explore projects and skills of Abdelrahman Hamada, a creative and detail-oriented front-end web developer.",
    siteName: "Abdelrahman Hamada Portfolio",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={`${font.className}`}
      >
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: 'white'
            }}
            outerStyle={{
              border: '3px solid white'
            }} />
        </div>
        <Navbar />
        {children}
        <Footer />
        <ScrollToUp />
      </body>
    </html>
  );
}
