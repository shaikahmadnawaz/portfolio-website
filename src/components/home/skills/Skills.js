import React from "react";
import "./skills.css";
import Java from "../../../assets/java.svg";
import AWS from "../../../assets/aws.svg";
import CSS from "../../../assets/css3.svg";
import HTML from "../../../assets/html-5.svg";
import Docker from "../../../assets/docker.svg";
import Firebase from "../../../assets/firebase.svg";
import Express from "../../../assets/express-js.svg";
import JavaScript from "../../../assets/javascript.svg";
import Mongodb from "../../../assets/mongodb.svg";
import Node from "../../../assets/nodejs.svg";
import Python from "../../../assets/python.svg";
import Reactjs from "../../../assets/react.svg";

const Skills = () => {
  return (
    <section className="skills-container">
      <div>
        <p className="heading">Skills</p>
        <p className="sub-heading">
          These are the technologies I've worked with
        </p>
      </div>
      <div className="skills-icons">
        <div>
          <img src={HTML} alt="html" />
          <p>HTML</p>
        </div>
        <div>
          <img src={CSS} alt="css" />
          <p>CSS</p>
        </div>
        <div>
          <img src={JavaScript} alt="javascript" />
          <p>JavaScript</p>
        </div>
        <div>
          <img src={Reactjs} alt="reactjs" />
          <p>React</p>
        </div>
        <div>
          <img src={Node} alt="nodejs" />
          <p>Node.js</p>
        </div>
        <div>
          <img src={Express} alt="expressjs" />
          <p>Express.js</p>
        </div>
        <div>
          <img src={Mongodb} alt="mongodb" />
          <p>MongoDB</p>
        </div>
        <div>
          <img src={Java} alt="java" />
          <p>Java</p>
        </div>
        <div>
          <img src={Python} alt="python" />
          <p>Python</p>
        </div>
        <div>
          <img src={Docker} alt="docker" />
          <p>Docker</p>
        </div>
        <div>
          <img src={AWS} alt="aws" />
          <p>AWS</p>
        </div>
        <div>
          <img src={Firebase} alt="firebase" />
          <p>Firebase</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
