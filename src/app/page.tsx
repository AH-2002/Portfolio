import Contacts from "@/components/Contacts";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "../components/About";
import Hero from "../components/Hero";
import AOSInitializer from "@/components/AOSInitializer";
export default function Home() {


  return (
    <section>
      <AOSInitializer />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </section>
  );
}