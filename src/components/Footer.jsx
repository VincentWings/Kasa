import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../assets/img/logo-bw.svg"; // Import logo image

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer>
            <div className="container">
                <div className="content">
                    {/* Link to the home page, wrapping the logo */}
                    <Link to="/">
                        <img
                            src={logo} // Display the logo
                            alt="Kasa logo" // Alt text for the logo
                            className="logo" // Apply logo styling
                            width="122" // Set width of the logo
                            height="40" // Set height of the logo
                        />
                    </Link>

                    {/* Copyright text */}
                    <p className="copyright">
                        © {currentYear} Kasa. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;