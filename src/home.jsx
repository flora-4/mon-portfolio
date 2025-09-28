import React from 'react';
import PortfolioHeader from './components/header';
import Background from './components/Background';

import Globetech from './components/GlobeTech';
import AboutMe from './components/AboutMe';
import Skills from './components/skills';
import Projects from './components/projects';
import Formations from './components/Formations';
import Experiences from './components/experiences';
import ContactSection from './components/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <Background />
      <PortfolioHeader />
      <div className="space-y-20 relative z-10 text-white">
        <section id="globetech" className="scroll-mt-20">
          <Globetech />
        </section>
        <section id="about-me" className="scroll-mt-20 md:mt-[-250px] lg:mt-1">
          <AboutMe />
        </section>
        <section id="skills" className="scroll-mt-20 md:mt-[-250px] lg:mt-60">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-20 md:mt-[-200px] lg:mt-30">
          <Projects />
        </section>
        <section id="formations" className="scroll-mt-20">
          <Formations />
        </section>
        <section id="experiences" className="scroll-mt-20">
          <Experiences />
        </section>
        <section id="contact" className="scroll-mt-20">
          <ContactSection />
        </section>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        section {
          position: relative;
          min-height: fit-content;
        }
      `}</style>
    </div>
  );
};

export default Home;
