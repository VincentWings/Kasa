import React from "react";
import logo from "../assets/img/logo.svg"; // Adjust the path if necessary

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <img src={logo} alt="Kasa logo" />
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
