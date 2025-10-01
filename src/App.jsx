import { Routes, Route } from "react-router-dom";
// import GlobeTech from "./components/GlobeTech";
// import AboutMe from "./components/AboutMe";
// import Formations from "./components/Formations";
// import Skills from "./components/skills"; 
// import Experiences from "./components/experiences";
// import Projects from "./components/projects";
// import ContactSection from "./components/ContactSection";
import Home from "./home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/GlobeTech" element={<GlobeTech />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/formations" element={<Formations />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/ContactSection" element={<ContactSection />} /> */}
    </Routes>
  );
}
