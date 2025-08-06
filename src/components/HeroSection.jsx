import react from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
            <span className="light-text">Protection Meets</span>
            <span className="bold-text">Intelligence</span>
        </h1>
        <button className="btn">Buy Now</button>
      </div>
    </section>
  );
};


export default HeroSection;
