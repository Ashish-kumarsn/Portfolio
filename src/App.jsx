import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import DSA from "./components/DSA/DSA";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
// import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import LearningProjects from "./components/learningTimeProject/LearningProjects";
// import CustomCursor from "./components/CustomCursor";

import { GridBackground } from "./components/GridBackground";
import Portfolio from "./components/OverView/Portfolio";

function App() {
  useEffect(() => {
    document.title = "Ashish Kumar | Portfolio";
  }, []);

return (
  <GridBackground>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <DSA />
      <Education />
      <Portfolio />
      <Footer />
    </div>
  </GridBackground>
);

}

export default App;
