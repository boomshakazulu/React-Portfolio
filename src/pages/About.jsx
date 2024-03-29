import React from "react";
import "../components/Styling/Aboutme.css";
import profilePicture from "../assets/Profile/portfolioIMG.jpg";
import Carousel from "../components/Carousel";

export default function AboutPage() {
  return (
    <section id="about" className="section">
      <Carousel />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-container">
            <h2 className="section-heading">About Me</h2>
            <div className="profile-picture-container">
              <img
                src={profilePicture}
                alt="Profile"
                className="profile-picture"
              />
            </div>
            <p className="text-muted">
              Hi, I'm Dallon Lahoda, a passionate and creative Full Stack
              Developer based in Utah, with a strong background in web
              development and a keen eye for design, I love to create seamless
              and engaging digital experiences.
            </p>
            <p className="text-muted">
              My journey in the world of web development began at the University
              of Utah coding bootcamp in August of 2023. I've had the
              opportunity to work on various projects, honing my skills in
              technologies like React, Node.js, and more.
            </p>
            <p className="text-muted">
              My approach to development is focused on writing clean, efficient,
              and scalable code. I enjoy turning complex problems into simple,
              beautiful solutions. Constantly learning and adapting to new
              technologies, I strive to stay at the forefront of the
              ever-evolving tech landscape.
            </p>
            <p className="text-muted">
              When I'm not coding, you'll find me playing guitar or traveling
              the world. Let's connect and explore how we can bring your ideas
              to life!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
