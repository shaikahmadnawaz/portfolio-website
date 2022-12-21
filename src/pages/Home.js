import React from "react";
import Navbar from "../components/common/navbar/Navbar";
import Header from "../components/home/header/Header";
import About from "../components/home/about/About";
import Projects from "../components/home/projects/Projects";
import Contact from "../components/home/contact/Contact";
import Footer from "../components/common/footer/Footer";
import Skills from "../components/home/skills/Skills";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
