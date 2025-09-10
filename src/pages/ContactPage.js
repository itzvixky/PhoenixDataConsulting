import React from "react";
import FB from "../source/FB.png";
import Twitter from "../source/twitter.png";
import LinkedIN from "../source/linkedin.png";
import Insta from "../source/INSTA.png";

const ContactPage = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">
          Have questions? Get in touch with our team
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              We'd love to hear from you. Whether you have questions about our
              courses, need consulting services, or want to discuss partnership
              opportunities.
            </p>

            <div className="contact-details">
              <h3>Contact Information</h3>
              <p>
                <strong>Phone:</strong>
                <a href="tel:9344834879">9344834879</a>,
                <a href="tel:8248424869">8248424869</a>
              </p>
              <p>
                <strong>Email:</strong>
                <a href="mailto:contact@phoenixdataconsulting.com">
                  contact@phoenixdataconsulting.com
                </a>
              </p>
              <p>
                <strong>Prefer speaking?</strong> Call or WhatsApp us on the
                numbers above. For full course info visit{" "}
                <a
                  href="https://karpithal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  karpithal.com
                </a>
                .
              </p>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
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
            </div>
          </div>

          <div className="contact-map">
            <h2>Our Location</h2>
            <div className="map-placeholder">
              <img src="/assets/illustrations/map.svg" alt="Our location map" />
              <p>Visit our training center for more information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
