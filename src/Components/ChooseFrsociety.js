import React from "react";
import News from "../Assets/newsjr.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/ChooseFrsociety.css";

function ChooseFrsociety() {
  const navigate = useNavigate();

  const handleChooseFrsocietyClick = () => {
    navigate("/volunteer-registration");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={News} alt="FR Sociey Newspapper" className="ba-image1" />
      </div>

      <div className="ba-text-content">
      <h3 className="ba-title">
  <span>Why Choose FR Society?</span>
</h3>
<p className="ba-description">
  Committed to education, healthcare, and social welfare, FR Society strives to create lasting change. Be a part of the impact.

  <p style={{ fontSize: "1rem", fontStyle: "italic", color: "#795484", padding:"20px 0px 0px 0px", fontFamily: "'merriweather'"}}>  
  Jalvā hai Nūr hai ke sarāpā Razā kā hai, <br />
  Tasvīr-e-Sunnīyat hai ke chehrā Razā kā hai...
</p>
</p>

<p className="ba-checks ba-check-first">
  <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#795484" }} /> Compassionate Service
</p>
<p className="ba-checks">
  <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#795484" }} /> Meaningful Impact
</p>
<p className="ba-checks">
  <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#795484" }} /> Transparency & Trust
</p>
<p className="ba-checks ba-check-last">
  <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#795484" }} /> Strong Community Support
</p>

        <button
          className="text-donate-btn"
          type="button"
          onClick={handleChooseFrsocietyClick}
        >
          <FontAwesomeIcon icon={faHandsHelping}  /> Become Volunteer
        </button>
      </div>
    </div>
  );
}

export default ChooseFrsociety;
