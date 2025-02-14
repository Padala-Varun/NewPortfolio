import React from "react";

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-container">
        <h2>Professional Experience</h2>

        <div className="experience-card">
          <h3>Research Manager</h3>
          <p className="company">STARWELDS Inc, Busan, South Korea</p>
          <p className="date">Sept 2019 – Present</p>
          <ul>
            <li>
              Developed **Additive Manufacturing/3D printing processes** for
              high deposition and productivity.
            </li>
            <li>
              Reduced layer mismatching width from **1.8mm to 0.4mm**, improving
              **wall resolution**.
            </li>
            <li>
              Increased **Titanium additive manufacturing deposition rate** from
              **0.5kg/h to 2kg/h**, achieving a **cost savings of $10,000**.
            </li>
          </ul>
        </div>

        <div className="experience-card">
          <h3>Postdoctoral Researcher</h3>
          <p className="company">
            Pukyong National University, Busan, South Korea
          </p>
          <p className="date">Mar 2019 – Aug 2019</p>
          <ul>
            <li>
              Enhanced **production rate by 15%** and **reduced post-weld labor
              costs by 60%** by developing an **automatic oxide cleaning
              apparatus** for narrow gap thick weld sections.
            </li>
            <li>
              Improved **mechanical properties of Inconel TIG welds by 180 MPa**
              through a newly developed **groove design**.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
