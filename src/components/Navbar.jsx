import { NavLink } from "react-router-dom"; // Import NavLink for navigation with active state
import logo from "../assets/img/logo.svg"; // Import logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo section with a link to home */}
        <div className="navbar__logo">
          <NavLink to="/">
            <img src={logo} alt="Kasa logo" /> {/* Display the logo */}
          </NavLink>
        </div>

        {/* Navigation links */}
        <ul className="navbar__nav">
          <li>
            {/* Link to the home page with active state */}
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")} // Apply 'active' class if link is active
            >
              Accueil {/* Text for the home link */}
            </NavLink>
          </li>

          <li>
            {/* Link to the about page with active state */}
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")} // Apply 'active' class if link is active
            >
              À propos {/* Text for the about link */}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;