import React from "react";

const Education = () => {
  return (
    <section className="education">
      <div className="education-container">
        <h2>Education</h2>
        <div className="education-timeline">
          <div className="education-item">
            <h3>Ph.D. in Mechanical Engineering</h3>
            <p className="university">
              Kyungsung University, Busan, South Korea (Feb 2019)
            </p>
            <p className="description">
              Dissertation: “A Study on the Dissimilar Welding of High
              Temperature Materials: Microstructure, Properties, and Welding
              Process Effects”
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
    </section>
  );
};

export default Education;
