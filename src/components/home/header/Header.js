import React from "react";
import "./header.css";
import Me from "../../../assets/me.svg";

const Header = () => {
  return (
    <section className="header-container">
      <div className="left">
        <h1>
          I'm Ahmad <span>Nawaz</span>
        </h1>
        <p>
          I am a Full Stack Developer
          <br /> with experience building open source projects
        </p>
        <a href="#" alt="resume">
          Download Resume
        </a>
      </div>
      <div className="right">
        <img src={Me} alt="Me" />
      </div>
    </section>
  );
};

export default Header;
