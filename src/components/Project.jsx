import React from "react";
import "./Styling/Project.css";

export default function Project({ title, imageSrc, deployedLink, githubLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageSrc} alt={`${title} screenshot`} />
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed App
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}
