import React from "react";
import { Link } from "react-router-dom";
import VolunteerCard from "./VolunteerCard";
import asmuddin from "../Assets/members_img/asmuddin.png";
import guddu from "../Assets/members_img/guddu.png";
import yawar from "../Assets/members_img/yawar-removebg-preview.png";
import logo from "../Assets/logo/1.svg";



import "../Styles/membersCard.css";

function Volunteer() {
  const members = [
    { img: asmuddin, name: "Asmuddin Ansari", title: "President", stars: "", reviews: "" },
    { img: yawar, name: "Yawar Hussain", title: "Secretary", stars: "", reviews: "" },
    { img: guddu, name: "Gulam Akhtar", title: "Treasurer", stars: "", reviews: "" },
    
  ];

 
 
  const currentYear = new Date().getFullYear();
  
  

  return (
    <div className="member-section" id="members">
        <h1 className="siteTitle-logo">
        <Link to="/">
          <img src={logo} alt="Jashneraza Logo" />
        </Link>
      </h1>
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Members</span>
        </h3>
        <p className="dt-description">
          At FR Society, our members are the heart and soul of our organization. They play a vital role in helping us fulfill our mission of serving underprivileged and marginalized communities in Rehla, Jharkhand.
        </p>
      </div>
      <div className="dt-cards-content">
        {members.map((member, index) => (
          <div key={index} id={`card-${index}`} className="member-card-container">
            <VolunteerCard {...member} />
        

          </div>
        ))}
      </div>

   
    </div>
  );
}

export default Volunteer;
