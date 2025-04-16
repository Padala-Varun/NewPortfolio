import React from "react";

const Awards = () => {
  return (
    <section className="awards">
      <div className="awards-container">
        <h2>Honors & Awards</h2>
        <ul>
          <li>
            <span className="award-title">
              Outstanding Young Manufacturing Engineer
            </span>
            <span className="award-org">SME, USA</span>
            <span className="award-year">2023</span>
          </li>
          <li>
            <span className="award-title">Best Researcher Award</span>
            <span className="award-org">
              Korean Welding and Joining Society, Seoul, South Korea
            </span>
            <span className="award-year">2020</span>
          </li>
          <li>
            <span className="award-title">Best Paper Award</span>
            <span className="award-org">IMME-2019, NIT Trichy, India</span>
            <span className="award-year">2019</span>
          </li>
          <li>
            <span className="award-title">Best Paper Award</span>
            <span className="award-org">
              ICRAMMCE-2017, MLRIT Institute, India
            </span>
            <span className="award-year">2017</span>
          </li>
          <li>
            <span className="award-title">Best Paper Award</span>
            <span className="award-org">
              Techno-Societal – 2016, SVERI Institute, India
            </span>
            <span className="award-year">2016</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Awards;
