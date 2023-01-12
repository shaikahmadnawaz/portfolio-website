import React from "react";
import "./about.css";
import about from "../../../assets/about.svg";

const About = () => {
  return (
    <section className="container">
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
        <ul>
          <li>Full stack developer with some good problem-solving skills.</li>
          <li>
            The stack I use to develop websites is MERN (MongoDB, Express.js,
            React, Node.js).
          </li>
          <li>I'm the founder of Motivation 4 Beginners.</li>
          <li>
            I'm an Instagram content creator with 350k+ followers. I make
            motivational quotes and reels.
          </li>
          I'm also a 3rd-year student pursuing Computer Science and Engineering
          at @VVIT, Guntur.
        </ul>
      </div>
    </section>
  );
};

export default About;
