import { Footer } from "../components/Navbar/Footer";
import { About } from "./About";
import { Experience } from "./Experience";
import Projects from "./Projects";
import Resume from "./Resume";

export function Home() {
  return (
    <>
      <Resume id="#resume" />
      <Projects id="#projects" />
      <About id="#about" />
      <Experience id="#experience" />
      <Footer id='#footer' />
    </>
  )
}