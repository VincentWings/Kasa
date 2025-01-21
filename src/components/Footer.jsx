import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-bw.svg"

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="content">
                <Link to="/">
                    <img 
                    src={logo} 
                    alt="Kasa logo" 
                    className="logo" 
                    width="122" 
                    height="40" 
                    />
                </Link>

                <p className="copyright">
                    © 2025 Kasa. All rights reserved
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer