import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <p>shaikahmadnawaz@gmail.com</p>
          <div className="social-icons">
            <a href="#" class="icon">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="icon">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" class="icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="icon">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="contact-right">
          <form action="">
            <input type="text" name="Name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="Message"
              placeholder="Your Message"
              rows="6"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
