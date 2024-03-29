import React from "react";
import "../components/Styling/Resume.css";
import HTMLBadge from "../assets/Badges/html5.png";
import cssBadge from "../assets/Badges/css.png";
import JSBadge from "../assets/Badges/Javascript.png";
import mongoBadge from "../assets/Badges/mongodb.png";
import mySQLBadge from "../assets/Badges/mysql.png";
import nodeBadge from "../assets/Badges/node.png";
import reactBadge from "../assets/Badges/react.png";

export default function ContactPage() {
  //array of frontend proficiencies
  const frontendProficiencies = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Handlebars",
    "Webpack",
  ];
  //array of frontend proficiencies
  const backendProficiencies = [
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Apollo Graphql",
  ];
  //function to download the pdf resume
  const downloadResume = () => {
    const element = document.createElement("a");
    element.href = "/Resume/Dallonresume.docx"; // Direct URL to the file
    element.download = "Dallon's_Resume.docx";
    document.body.appendChild(element); // Required for this to work in Firefox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="resume-page">
      {/* Language Badges */}
      <div className="language-badges">
        <img src={HTMLBadge} alt="HTML Badge" />
        <img src={cssBadge} alt="CSS Badge" />
        <img src={JSBadge} alt="JavaScript Badge" />
        <img src={mongoBadge} alt="MongoDB Badge" />
        <img src={mySQLBadge} alt="MySQL Badge" />
        <img src={nodeBadge} alt="Node.js Badge" />
        <img src={reactBadge} alt="React.js Badge" />
        {/* Add more image badges as needed */}
      </div>

      {/* Download Button */}
      <button onClick={downloadResume} className="download-button">
        Download Resume
      </button>

      {/* Frontend Proficiencies */}
      <div className="proficiencies">
        <h2>Frontend Proficiencies</h2>
        <ul>
          {frontendProficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>

      {/* Backend Proficiencies */}
      <div className="proficiencies">
        <h2>Backend Proficiencies</h2>
        <ul>
          {backendProficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
