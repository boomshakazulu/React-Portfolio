import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./UI/Navbar";
import "./Styling/Nav.css";
//the use of NavLink instead of normal link helped with the active classes for styling based on current page
export default function Nav() {
  return (
    <>
      <Navbar
        links={[
          <NavLink
            key={1}
            className="nav-link"
            to="/"
            activeclassname="active-link"
          >
            About Me
          </NavLink>,
          <NavLink
            key={2}
            className="nav-link"
            to="/Portfolio"
            activeclassname="active-link"
          >
            Portfolio
          </NavLink>,
          <NavLink
            key={3}
            className="nav-link"
            to="/Contact"
            activeclassname="active-link"
          >
            Contact
          </NavLink>,
          <NavLink
            key={4}
            className="nav-link"
            to="/Resume"
            activeclassname="active-link"
          >
            Resume
          </NavLink>,
        ]}
      />
    </>
  );
}
