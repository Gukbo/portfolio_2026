import Welcome from "./Welcome.jsx";
import Contact from "./Contact.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";

export default function Home() {
  return (
    <>
      <section>
        <Welcome />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}
