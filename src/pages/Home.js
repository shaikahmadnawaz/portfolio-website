import React from "react";
import Navbar from "../components/common/navbar/Navbar";
import Header from "../components/home/header/Header";
import About from "../components/home/about/About";
import Projects from "../components/home/projects/Projects";
import Contact from "../components/home/contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
