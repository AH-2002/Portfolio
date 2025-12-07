import Contacts from "@/components/Contacts";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "../components/About";
import Hero from "../components/Hero";
import Experience from "@/components/Experience";
export default function Home() {


  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}