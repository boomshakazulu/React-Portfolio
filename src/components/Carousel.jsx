import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styling/Carousel.css";

import gamesPic from "../assets/Projects/superbasicminigames.png";
import techBlogPic from "../assets/Projects/Techblog.png";
import moviePic from "../assets/Projects/movieknight.png";
import esportsPic from "../assets/Projects/esports.png";

const Carousel = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesToShow = [
    {
      name: "Super Basic Minigames",
      img: gamesPic,
      url: "https://github.com/shawncrook411/minigame",
    },
    {
      name: "TechBlog",
      img: techBlogPic,
      url: "https://github.com/boomshakazulu/tech-blog",
    },
    {
      name: "Movie Knights",
      img: moviePic,
      url: "https://github.com/cpulsipher24/Movie-Knight",
    },
    {
      name: "E-sports Tracker",
      img: esportsPic,
      url: "https://github.com/Ricochet227/E-Sports-Tracker",
    },
  ];

  // Preload images before rendering
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = imagesToShow.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image.img; // Corrected: access the img property
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      // Set state when all images are loaded
      Promise.all(imagePromises)
        .then(() => setImagesLoaded(true))
        .catch((error) => console.error("Error preloading images:", error));
    };

    preloadImages();
  }, [imagesToShow]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className={`carousel-container ${imagesLoaded ? "loaded" : ""}`}>
      {imagesLoaded && (
        <div className="carousel">
          <Slider {...settings}>
            {imagesToShow.map((image, index) => (
              <div key={index}>
                <a href={image.url} target="_blank" rel="noopener noreferrer">
                  <img src={image.img} alt={image.name} />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      )}
      {!imagesLoaded && <p>Loading...</p>}
      {imagesLoaded && (
        <div className="slick-dots-container">
          <ul className="slick-dots">
            {imagesToShow.map((_, index) => (
              <li key={index} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Carousel;
