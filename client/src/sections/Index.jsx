import AboutMe from './about/AboutMe';
import Contact from './contact/Contact';
import Experience from './experience/Experience';
import Main from './main/Main';
import Projects from './projects/Projects';
import Services from './services/Services';
import Skills from './skills/Skills';
import SnC from './studyAndcertificate/SnC';

const Index = () => {
  return (
    <>
        <Main />
        <AboutMe />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <SnC />
        <Contact />
    </>
  )
}

export default Index