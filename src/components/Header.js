import React from "react";
import { Link } from "react-router-dom";
import logo from "../source/LOGO.png";

const Header = () => {
  const navigateToKarpithal = () => {
    window.open("https://www.karpithal.com", "_blank", "noopener noreferrer");
  };

  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="Phoenix Data Consulting"
            className="logo-image"
          />
          <span className="logo-text">Phoenix Data Consulting</span>
        </Link>
        <nav>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={navigateToKarpithal} className="btn btn-primary">
                Visit Karpithal.com
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
