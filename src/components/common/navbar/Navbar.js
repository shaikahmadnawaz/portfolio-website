import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../../assets/logo.png";
// import { navLinks } from "./data";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="container">
        <img src={Logo} className="logo" />
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <a href="https://shaikahmadnawaz.hashnode.dev/">Blogs</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
