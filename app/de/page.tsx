import About from "@/components/de/about.de";
import Contact from "@/components/de/contact.de";
import Experience from "@/components/de/experience.de";
import Intro from "@/components/de/intro.de";
import Projects from "@/components/de/projects.de";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/de/skills.de";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
