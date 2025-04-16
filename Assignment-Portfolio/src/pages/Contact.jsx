import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="contact-text">
          Feel free to reach out to me for collaborations, research discussions,
          or any professional inquiries.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:muralicheepu@gmail.com">muralicheepu@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+821027143774">+82 1027143774</a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
