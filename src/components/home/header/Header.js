import React from "react";
import "./header.css";
import Me from "../../../assets/me.svg";

const Header = () => {
  return (
    <section className="header-container">
      <div className="left">
        <h2>Hi There!</h2>
        <h1>I'm Nawaz</h1>
      </div>
      <div className="right">
        <img src={Me} alt="Me" />
      </div>
    </section>
  );
};

export default Header;
