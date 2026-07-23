import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
