import React from "react";
import "../styles/Home.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default Home;
