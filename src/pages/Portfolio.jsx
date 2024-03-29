import React from "react";
import Project from "../components/Project";
import gamesPic from "../assets/Projects/superbasicminigames.png";
import techBlogPic from "../assets/Projects/Techblog.png";
import moviePic from "../assets/Projects/movieknight.png";
import txtEditPic from "../assets/Projects/txtEdit.png";
import noSQLPic from "../assets/Projects/nosql.png";
import esportsPic from "../assets/Projects/esports.png";

import "../components/Styling/PorfolioPage.css";
//every 2 projects are wrapped in a row div for styling
export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <h2>My Projects</h2>
      <div className="projects-container">
        <Project
          title="E-Sports Tracker"
          imageSrc={esportsPic}
          deployedLink="https://e-sports-tracker-b9n7.onrender.com/"
          githubLink="https://github.com/Ricochet227/E-Sports-Tracker"
        />
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
        <Project
          title="NoSQL-Social-Network-API (No frontend)"
          imageSrc={noSQLPic}
          deployedLink="https://github.com/boomshakazulu/NoSQL-Social-Network-API"
          githubLink="https://github.com/boomshakazulu/NoSQL-Social-Network-API"
        />

        {/* Add more Project components with different project details here when needed*/}
      </div>
    </div>
  );
}
