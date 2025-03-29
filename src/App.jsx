import React from "react";
import './index.css';
import Home from "./components/Home/home";
import Education from "./components/Educations/Education";
import Skill from "./components/Skills/Skills";
import './bg.css';
import Certficate from "./components/Certficates/Certficate";
import Navbar from "./components/NavBar/NavBar";


const App = () => {
  return (
    <div>
      {/* Fixed Navbar */}
      <Navbar/>
      
      {/* Sections */}
      <section id="home">
        <Home />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="certificates">
        <Certficate />
      </section>
    </div>
  );
};

export default App;
