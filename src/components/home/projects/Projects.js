import React from "react";
import ProjectCover from "../../../assets/port1.jpg";
import "./projects.css";

const Projects = () => {
  return (
    <div className="container">
      <h1 className="sub-title">My Work</h1>
      <p class="port-text">
        Here is some of my work that I've done using technologies.
      </p>
      <div className="projects">
        <div class="project-item">
          <div class="image">
            <img src={ProjectCover} alt="" />
          </div>
          <div class="hover-items">
            <h3>Project Name</h3>
            <div class="icons">
              <a href="#" class="icon">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="icon">
                <i class="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="project-item">
          <div class="image">
            <img src={ProjectCover} alt="" />
          </div>
          <div class="hover-items">
            <h3>Project Name</h3>
            <div class="icons">
              <a href="#" class="icon">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="icon">
                <i class="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="project-item">
          <div class="image">
            <img src={ProjectCover} alt="" />
          </div>
          <div class="hover-items">
            <h3>Project Name</h3>
            <div class="icons">
              <a href="#" class="icon">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="icon">
                <i class="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="project-item">
          <div class="image">
            <img src={ProjectCover} alt="" />
          </div>
          <div class="hover-items">
            <h3>Project Name</h3>
            <div class="icons">
              <a href="#" class="icon">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="icon">
                <i class="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="project-item">
          <div class="image">
            <img src={ProjectCover} alt="" />
          </div>
          <div class="hover-items">
            <h3>Project Name</h3>
            <div class="icons">
              <a href="#" class="icon">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="icon">
                <i class="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
