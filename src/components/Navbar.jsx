import React from "react";
import logo from "../assets/img/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <a href="/">
            <img src={logo} alt="Kasa logo" />
          </a>
        </div>

        <div className="navbar__nav">
          <ul>
            <li>
              <a href="">Accueil</a>
            </li>

            <li>
              <a href="">A propos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
