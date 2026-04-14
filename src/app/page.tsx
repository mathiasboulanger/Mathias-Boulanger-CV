import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Metrics from "@/components/Metrics";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Metrics />
        <Projects />
        <Tools />
        <About />
        <Contact />
      </main>
    </>
  );
}
