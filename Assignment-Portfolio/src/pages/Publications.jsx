import React from "react";

const Publications = () => {
  return (
    <section className="publications">
      <div className="publications-container">
        <h2>Publications</h2>

        <div className="publication-category">
          <h3>Patents</h3>
          <ul>
            <li>
              <span className="highlight">
                Butt welding of high-tensile nickel alloy
              </span>{" "}
              using friction welding
              <span className="year">(Granted in 2020)</span>
            </li>
            <li>
              <span className="highlight">
                Apparatus and method for cleaning oxide layer
              </span>
              <span className="year">(Granted in 2021)</span>
            </li>
            <li>
              <span className="highlight">
                Method for setting welding condition automatically and apparatus
              </span>
              <span className="year">(Under review 2023)</span>
            </li>
          </ul>
        </div>

        <div className="publication-category">
          <h3>Books</h3>
          <ul>
            <li>
              <span className="highlight">
                Advances in Additive Manufacturing Processes
              </span>
              <span className="year">(2021)</span>
            </li>
            <li>
              <span className="highlight">
                Welding Practices for Industry 5.0
              </span>
              <span className="year">(2023, in press)</span>
            </li>
            <li>
              <span className="highlight">
                An Introduction to Metal Additive Manufacturing:
              </span>
              Fundamentals, Processing and Applications{" "}
              <span className="year">(In press)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Publications;
