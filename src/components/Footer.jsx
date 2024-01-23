import React from "react";
import GithubPic from "../assets/Contact/github.webp";
import EmailPic from "../assets/Contact/emailIcon.png";
import LinkedPic from "../assets/Contact/LinkedIn_logo_initials.png";
import "./Styling/Footer.css"; // Import the CSS file

export default function Foot() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <a
              href="https://github.com/boomshakazulu"
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <img src={GithubPic} alt="Github" className="badge" />
            </a>
          </div>
          <div className="col">
            <a
              href="mailto:your-dallonlahoda@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <img src={EmailPic} alt="Email" className="badge" />
            </a>
          </div>
          <div className="col">
            <a
              href="https://www.linkedin.com/in/dallon-lahoda-013854284/"
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <img src={LinkedPic} alt="LinkedIn" className="badge" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
