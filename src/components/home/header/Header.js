import React from "react";
import "./header.css";
import Me from "../../../assets/me.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="left-header">
          <h2 className="intro">Hello, I'm</h2>
          <h1 className="name">Shaik Ahmad Nawaz</h1>
          <p>
            I'm a Web Developer, I love to create beautiful and functional
            websites.
          </p>
          <div class="btn-con">
            <a href={Me} download class="main-btn">
              <span class="btn-text">Download Resume</span>
              <span class="btn-icon">
                <i class="fas fa-download"></i>
              </span>
            </a>
          </div>
          {/* <a href="#" alt="resume">
            Download Resume
          </a> */}
        </div>
        <div className="right-header">
          <div class="h-shape"></div>
          <div className="image">
            <img src={Me} alt="Me" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
