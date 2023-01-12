import React from "react";
import ProjectImage from "../../../assets/projects.png";
import "./projects.css";

const Projects = () => {
  return (
    <div className="container">
      <h1 className="sub-title">My Work</h1>
      <div className="project-list">
        <div className="projects">
          <div className="project1">
            <img src={ProjectImage} alt="" />
          </div>
          <div className="project1">
            <img src={ProjectImage} alt="" />
          </div>
          <div className="project1">
            <img src={ProjectImage} alt="" />
          </div>
          <div className="project1">
            <img src={ProjectImage} alt="" />
          </div>
          <div className="project1">
            <img src={ProjectImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
