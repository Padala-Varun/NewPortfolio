import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Dr. Murali Mohan Cheepu
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className="nav-links">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/publications" className="nav-links">
              Publications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-links">
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/awards" className="nav-links">
              Awards
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/murali-mohan-cheepu-1b1b1b1b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/muralicheepu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
          <a href="mailto:muralicheepu@gmail.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
