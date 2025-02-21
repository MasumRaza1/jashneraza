import React from "react";
import Aim from "../Assets/aboutCollage.png";
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
  <span>Who We Are</span>
</h3>

<p className="about-description">
  FR Society, based in Rehla, Jharkhand, is dedicated to uplifting underprivileged communities.  
  We provide financial aid for healthcare and education, paving the way for a brighter, more hopeful future. 

  <p style={{ fontSize: "1rem", fontStyle: "italic", color: "#795484", padding:"20px 0px 0px 0px", fontFamily: "'merriweather'"}}>  
  Kaun detā hai dene ko muñh chāhiye <br />
Dene vālā hai sachchā hamārā Nabī ...
</p>
</p>

<h4 className="about-text-title">Our Mission</h4>

<SolutionStep
  title="Education for Growth"
  description="We support learning initiatives, making knowledge and resources accessible to all."
/>

<SolutionStep
  title="Healthcare for All"
  description="By covering medical expenses, we ensure individuals receive the care they need, when they need it most."
/>

<SolutionStep
  title="Community Welfare"
  description="Through social welfare programs and events, we foster unity, support, and positive change."
/>

      </div>
    </div>
  );
}

export default About;
