import React from "react";
import News from "../Assets/newsjr.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={News} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Jashn-e-Raza</span>
        </h3>
        <p className="ba-description">
        Jashn-e-Raza stands out as a beacon of hope and compassion in our community. Here are a few reasons why choosing Jashn-e-Raza means choosing to make a real difference:
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#795484" }} /> Dedication to Service
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#795484" }} /> Impactful Initiatives
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#795484" }} /> Transparency and Accountability
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#795484" }} /> Community Engagement
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faHandsHelping}  /> Become Volunteer
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
