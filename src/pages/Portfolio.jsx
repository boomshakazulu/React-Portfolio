import React from "react";
import Project from "../components/Project";
import gamesPic from "../assets/Projects/superbasicminigames.png";
import techBlogPic from "../assets/Projects/Techblog.png";
import moviePic from "../assets/Projects/movieknight.png";
import txtEditPic from "../assets/Projects/txtEdit.png";
import noSQLPic from "../assets/Projects/nosql.png";
import ecomPic from "../assets/Projects/e-commerce.png";

import "../components/Styling/PorfolioPage.css";

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-row">
          <Project
            title="Super Basic Minigames"
            imageSrc={gamesPic}
            deployedLink="https://super-basic-minigames-a6389a9aca89.herokuapp.com/"
            githubLink="https://github.com/shawncrook411/minigame"
          />
          <Project
            title="Tech Blog"
            imageSrc={techBlogPic}
            deployedLink="https://mysterious-atoll-43997-fe4bfa4a1235.herokuapp.com/"
            githubLink="https://github.com/boomshakazulu/tech-blog"
          />
        </div>
        <div className="project-row">
          <Project
            title="Movie Knight"
            imageSrc={moviePic}
            deployedLink="https://cpulsipher24.github.io/Movie-Knight/index.html"
            githubLink="https://github.com/cpulsipher24/Movie-Knight"
          />
          <Project
            title="Text Editor(PWA)"
            imageSrc={txtEditPic}
            deployedLink="https://text-editor-pwa-vtnm.onrender.com/"
            githubLink="https://github.com/boomshakazulu/Text-Editor-PWA-"
          />
        </div>
        <div className="project-row">
          <Project
            title="NoSQL-Social-Network-API (No frontend)"
            imageSrc={noSQLPic}
            deployedLink="https://github.com/boomshakazulu/NoSQL-Social-Network-API"
            githubLink="https://github.com/boomshakazulu/NoSQL-Social-Network-API"
          />
          <Project
            title="E-commerce Backend (No frontend)"
            imageSrc={ecomPic}
            deployedLink="https://github.com/boomshakazulu/e-commerce-backend?tab=readme-ov-file"
            githubLink="https://github.com/boomshakazulu/e-commerce-backend?tab=readme-ov-file"
          />
        </div>

        {/* Add more Project components with different project details */}
      </div>
    </div>
  );
}
