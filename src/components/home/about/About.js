import React from "react";
import "./about.css";
import about from "../../../assets/about.svg";

const About = () => {
  return (
    <section className="about-container">
      <div className="left">
        <img src={about} alt="about" />
      </div>
      <div className="right">
        <h1>About Me</h1>
        <p>
          Hi Everyone, I am <span>Shaik Ahmad Nawaz</span> from Pedapudi, Andhra
          pradesh, India. <br />I am pursuing B.Tech in Vasireddy Venkatadri
          Institute of Technology.
        </p>
      </div>
    </section>
  );
};

export default About;
