import React from "react";
import FB from "../source/FB.png";
import Twitter from "../source/twitter.png";
import LinkedIN from "../source/linkedin.png";
import Insta from "../source/INSTA.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Phoenix Data Consulting</h3>
            <p>
              Transforming data into intelligence through expert-led courses and
              consulting services.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <img src={FB} alt="Facebook" className="social-icon" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={Twitter} alt="Twitter" className="social-icon" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={LinkedIN} alt="LinkedIn" className="social-icon" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={Insta} alt="Instagram" className="social-icon" />
              </a>
            </div>
            <div className="contact-info">
              <p>
                <a href="tel:9344834879">9344834879</a> |{" "}
                <a href="tel:8248424869">8248424869</a>
              </p>
              <p>
                <a href="mailto:contact@phoenixdataconsulting.com">
                  contact@phoenixdataconsulting.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Phoenix Data Consulting. All
            rights reserved.
          </p>
          <p>
            For detailed course schedules & placements visit:{" "}
            <a
              href="https://karpithal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              karpithal.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
