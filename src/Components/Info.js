import React from "react";
import InformationCard from "./InformationCard";
import { faBook, faTruckMedical, faHeart } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        At Jashn-e-Raza, we provide financial support to underprivileged individuals in Rehla, Jharkhand. Our focus is on covering basic needs such as medical expenses and educational fees to foster a brighter future for all members of our community.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Health Care"
          description="Jashn-e-Raza stands as a beacon of healthcare support in Rehla, Jharkhand, 
          offering financial assistance to ensure no one faces medical challenges alone. 
          Through our efforts, we strive to create a healthier, 
          more resilient community where everyone can access the care they need to thrive."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Education"
          description="Education is the key to unlocking a brighter future, and at Jashn-e-Raza, 
          we're committed to ensuring every child has access to quality education in Rehla, Jharkhand. 
          By providing financial support for educational expenses, 
          we empower young minds to reach their full potential and build a foundation for lifelong success."
          icon={faBook}
        />

        <InformationCard
          title="Community Care"
          description="At Jashn-e-Raza, we prioritize the well-being of our community in Rehla, Jharkhand, by offering financial support for essential needs like medical expenses and educational fees. Through collective care and support, we strive to uplift the underprivileged and foster a stronger, more resilient community for all."
          icon={faHeart}
        />
      </div>
    </div>
  );
}

export default Info;
