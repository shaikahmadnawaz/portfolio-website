import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { navLinks } from "./data";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="name">Nawaz</div>
      <nav className="nav-links">
        <ul>
          {navLinks.map((link) => {
            if (link.active) {
              return (
                <li className="nav-active">
                  {link?.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href}>{link.name}</Link>
                  )}
                </li>
              );
            }
            return (
              <li>
                <Link to={link.href}>{link.name}</Link>
              </li>
            );
          })}
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
