import React from "react";
import { Link } from "react-router-dom";
import VolunteerCard from "./VolunteerCard";
import asmuddin from "../Assets/members_img/asmuddin.png";
import guddu from "../Assets/members_img/guddu.png";
import alam from "../Assets/members_img/alam.png";
import amin from "../Assets/members_img/amin.png";
import bablu from "../Assets/members_img/bablu-removebg-preview.png";
import islamuddin from "../Assets/members_img/islamuddin-removebg-preview.png";
import kalim from "../Assets/members_img/kalim-removebg-preview.png";
import sabir from "../Assets/members_img/sabir-removebg-preview.png";
import tauhid from "../Assets/members_img/tauhid_Khalifa-removebg-preview.png";
import yawar from "../Assets/members_img/yawar-removebg-preview.png";
import najmuddin from "../Assets/members_img/najmuddin.png";
import logo from "../Assets/FR Society (250 x 75 px) (1).svg";



import "../Styles/membersCard.css";

function Volunteer() {
  const members = [
    { img: asmuddin, name: "Asmuddin Ansari", title: "President", stars: "", reviews: "" },
    { img: yawar, name: "Yawar Hussain", title: "Secretary", stars: "", reviews: "" },
    { img: guddu, name: "Gulam Akhtar", title: "Treasurer", stars: "", reviews: "" },
    { img: najmuddin, name: "Najmuddin Noori", title: "Member", stars: "", reviews: "" },
    { img: bablu, name: "Manjur Alam", title: "Member", stars: "", reviews: "" },
    { img: kalim, name: "Kalimuddin Ansari", title: "Member", stars: "", reviews: "" },
    { img: islamuddin, name: "Islamuddin Ansari", title: "Member", stars: "", reviews: "" },
    { img: alam, name: "Md. Alam Ansari", title: "Member", stars: "", reviews: "" },
    { img: amin, name: "Amin Ansari", title: "Member", stars: "", reviews: "" },
    { img: sabir, name: "Sabir Ansari", title: "Member", stars: "", reviews: "" },
    { img: tauhid, name: "Tauhid Khalifa", title: "Member", stars: "", reviews: "" },
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

      <div className="footer-legal">
        <p>© 2021-{currentYear} FR Society. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Volunteer;
