import React from "react";
import { Link } from "react-router-dom";
export default function Navbar({ links }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <h1>Dallon Lahoda</h1>
      </Link>
      <div className="" id="navbarNav">
        <ul className="navbar-nav ml-auto">{links.map((link) => link)}</ul>
      </div>
    </nav>
  );
}
