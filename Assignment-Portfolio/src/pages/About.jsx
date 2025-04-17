import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <img
          src="/assets/cheepu.jpg"
          alt="Dr. Murali Mohan Cheepu"
          className="profile-image"
        />
        <h1 className="home-title">Dr. Murali Mohan Cheepu</h1>
        <p className="home-subtitle">
          Mechanical Engineer | Researcher | Innovator
        </p>
        <div className="contact-info">
          <p>📍 Busan, South Korea</p>
          <p>
            📧 <a href="mailto:muralicheepu@gmail.com">muralicheepu@gmail.com</a>
          </p>
          <p>📞 <a href="tel:+821027143774">+82 1027143774</a></p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          I am a passionate <strong>Mechanical Engineer</strong> with a Ph.D. from
          <strong> Kyungsung University, South Korea</strong>. My expertise lies in{" "}
          <strong>dissimilar welding</strong> of high-temperature materials,{" "}
          <strong>additive manufacturing</strong>, and{" "}
          <strong>welding process optimization</strong>.
        </p>
        <p>
          I have published multiple <strong>research papers, patents,</strong>{" "}
          and <strong>books</strong> in the field of welding and additive manufacturing.
          My work extends to{" "}
          <strong>material characterization, metallurgical analysis,</strong>{" "}
          and <strong>process automation</strong>, contributing to advancements in industrial technology.
        </p>
      </div>

      {/* Education Section */}
      <div className="education-container">
        <h2>Education</h2>
        <div className="education-timeline">
          <div className="education-item">
            <h3>Ph.D. in Mechanical Engineering</h3>
            <p className="university">
              Kyungsung University, Busan, South Korea (Feb 2019)
            </p>
            <p className="description">
              Dissertation: “A Study on the Dissimilar Welding of High Temperature Materials:
              Microstructure, Properties, and Welding Process Effects”
            </p>
          </div>
          <div className="education-item">
            <h3>Master of Technology, Welding Engineering</h3>
            <p className="university">
              National Institute of Technology Tiruchirappalli, India (2011)
            </p>
          </div>
          <div className="education-item">
            <h3>Bachelor of Engineering, Mechanical Engineering</h3>
            <p className="university">
              GITAM College of Engineering, Andhra University, India (2009)
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="experience-container">
        <h2>Professional Experience</h2>
        <div className="experience-card">
          <h3>Research Manager</h3>
          <p className="company">STARWELDS Inc, Busan, South Korea</p>
          <p className="date">Sept 2019 – Present</p>
          <ul>
            <li>
              Developed <strong>Additive Manufacturing/3D printing processes</strong> for
              high deposition and productivity.
            </li>
            <li>
              Reduced layer mismatching width from <strong>1.8mm to 0.4mm</strong>,
              improving <strong>wall resolution</strong>.
            </li>
            <li>
              Increased <strong>Titanium additive manufacturing deposition rate</strong> from
              <strong>0.5kg/h to 2kg/h</strong>, achieving a <strong>cost savings of $10,000</strong>.
            </li>
          </ul>
        </div>
        <div className="experience-card">
          <h3>Postdoctoral Researcher</h3>
          <p className="company">Pukyong National University, Busan, South Korea</p>
          <p className="date">Mar 2019 – Aug 2019</p>
          <ul>
            <li>
              Enhanced <strong>production rate by 15%</strong> and reduced post-weld labor costs by
              <strong>60%</strong> by developing an automatic oxide cleaning apparatus.
            </li>
            <li>
              Improved <strong>mechanical properties of Inconel TIG welds by 180 MPa</strong> through
              a newly developed groove design.
            </li>
          </ul>
        </div>
      </div>

      {/* Publications Section */}
      <div className="publications-container">
        <h2>Publications</h2>

        <div className="publication-category">
          <h3>Patents</h3>
          <ul>
            <li>
              <strong>Butt welding of high-tensile nickel alloy</strong> using friction welding
              <span className="year"> (Granted in 2020)</span>
            </li>
            <li>
              <strong>Apparatus and method for cleaning oxide layer</strong>
              <span className="year"> (Granted in 2021)</span>
            </li>
            <li>
              <strong>
                Method for setting welding condition automatically and apparatus
              </strong>
              <span className="year"> (Under review 2023)</span>
            </li>
          </ul>
        </div>

        <div className="publication-category">
          <h3>Books</h3>
          <ul>
            <li>
              <strong>Advances in Additive Manufacturing Processes</strong>
              <span className="year"> (2021)</span>
            </li>
            <li>
              <strong>Welding Practices for Industry 5.0</strong>
              <span className="year"> (2023, in press)</span>
            </li>
            <li>
              <strong>An Introduction to Metal Additive Manufacturing:</strong> Fundamentals, Processing and Applications
              <span className="year"> (In press)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Awards Section */}
      <div className="awards-container">
        <h2>Honors & Awards</h2>
        <ul>
          <li>
            <strong>Outstanding Young Manufacturing Engineer</strong> –
            SME, USA <span className="award-year">2023</span>
          </li>
          <li>
            <strong>Best Researcher Award</strong> –
            Korean Welding and Joining Society, Seoul, South Korea{" "}
            <span className="award-year">2020</span>
          </li>
          <li>
            <strong>Best Paper Award</strong> – IMME-2019, NIT Trichy, India{" "}
            <span className="award-year">2019</span>
          </li>
          <li>
            <strong>Best Paper Award</strong> – ICRAMMCE-2017, MLRIT Institute, India{" "}
            <span className="award-year">2017</span>
          </li>
          <li>
            <strong>Best Paper Award</strong> – Techno-Societal – 2016, SVERI Institute, India{" "}
            <span className="award-year">2016</span>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="contact-text">
          Feel free to reach out to me for collaborations, research discussions, or any professional inquiries.
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

export default Home;
