import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GithubPic from "../assets/Contact/github.webp";
import EmailPic from "../assets/Contact/emailIcon.png";
import LinkedPic from "../assets/Contact/LinkedIn_logo_initials.png";
import "./Styling/Footer.css"; // Import the CSS file

export default function Foot() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  //sets the page to stick so if the page is shorter the the viewheight the footer will remain stuck to the bottom.
  //removes sticky when the page is longer the viewheight to prevent the footer from blocking content
  useEffect(() => {
    function handleStickyFooter() {
      const footer = document.querySelector(".footer");
      const isDocumentHeightLessThanOrEqualToWindow =
        document.documentElement.scrollHeight <= window.innerHeight;
      const isScrolledToBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - footer.offsetHeight;

      setIsSticky(
        isDocumentHeightLessThanOrEqualToWindow && isScrolledToBottom
      );
    }

    // Initial check
    handleStickyFooter();

    // Recalculate on window resize
    window.addEventListener("resize", handleStickyFooter);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleStickyFooter);
    };
  }, [location.pathname]); // Run when the pathname changes. This part is critical

  return (
    <footer className={`footer ${isSticky ? "sticky-footer" : ""}`}>
      <div className="footContainer text-center">
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
