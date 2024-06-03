import React from "react";
import Aim from "../Assets/aim.svg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Aim} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
         
At Jashn-e-Raza, based in Rehla, Jharkhand, 
we are dedicated to uplifting underprivileged 
communities. Through financial support for basic 
needs like healthcare and education, we aim to foster a brighter future for all. 
        </p>

        <h4 className="about-text-title">Our Initiatives</h4>

        <SolutionStep
          title="Empowering Tomorrow"
          description="Through educational scholarships and skill-building workshops, we empower the youth of Rehla, Jharkhand, to unlock their full potential and shape a brighter future."
        />

        <SolutionStep
          title="Healthcare Access"
          description="By providing financial assistance for medical expenses, we ensure that individuals in Rehla have access to essential healthcare services when they need them most."
        />

        <SolutionStep
          title="Community Development"
          description="Through various community outreach programs, we foster unity and resilience, creating a supportive environment where everyone can thrive and prosper."
        />
      </div>
    </div>
  );
}

export default About;
