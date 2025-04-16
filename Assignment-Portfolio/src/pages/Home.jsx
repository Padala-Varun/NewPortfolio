import React from "react";

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
            📧{" "}
            <a href="mailto:muralicheepu@gmail.com">muralicheepu@gmail.com</a>
          </p>
          <p>
            📞 <a href="tel:+821027143774">+82 1027143774</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
