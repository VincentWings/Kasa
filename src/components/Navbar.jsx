import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <NavLink to="/">
            <img src={logo} alt="Kasa logo" />
          </NavLink>
        </div>

        <ul className="navbar__nav">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
