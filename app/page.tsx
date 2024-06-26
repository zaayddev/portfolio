import About from "@/components/en/about.en";
import Contact from "@/components/en/contact.en";
import Experience from "@/components/en/experience.en";
import Intro from "@/components/en/intro.en";
import Projects from "@/components/en/projects.en";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/en/skills.en";

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
