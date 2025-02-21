import React from "react";
import InformationCard from "./InformationCard";
import { faHandHoldingMedical, faSchool, faBookOpen, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import jashneraza from "../Assets/branches_logo/jashneraza.svg";
import shifaeraza from "../Assets/branches_logo/shifaeraza.svg";
import kalameraza from "../Assets/branches_logo/kalameraza.svg";
import faizaneraza from "../Assets/branches_logo/faizaneraza.svg";


function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
      <h3 className="info-title">
  <span>Our Mission</span>
</h3>
<p className="info-description">
  FR Society supports underprivileged individuals in Rehla, Jharkhand, covering medical and educational needs to build a brighter future.

  <p style={{ fontSize: "1rem", fontStyle: "italic", color: "#795484", padding:"20px 0px 0px 0px", fontFamily: "'merriweather'"}}>  
  Yā Ilāhī sard-e-mehrī par ho jab khurshīd-e-ḥashr, <br />
Sayyad-e-besāyah ke zill-e-lawā kā sāth ho...
</p>
</p>

      </div>

      <div className="info-cards-content">
      <InformationCard
  title="Shifa-e-Raza"
  description="Providing healthcare and social welfare support to ensure a healthier community for all."
  icon={faHandHoldingMedical} 
  branchLogo={shifaeraza}
/>

<InformationCard
  title="Faizan-e-Raza"
  description="Dedicated to Quranic education, making learning accessible to everyone."
  icon={faSchool}
  branchLogo={faizaneraza}
/>

<InformationCard
  title="Kalam-e-Raza"
  description="A vast collection of Ala Hazrat's e-books and literature, easily accessible to all."
  icon={faBookOpen} // Represents literature & e-books
  branchLogo={kalameraza}
/>

<InformationCard
  title="Jashn-e-Raza"
  description="Organizing events and celebrations that bring the community together."
  icon={faCalendarAlt} // Represents events & celebrations
  branchLogo={jashneraza}
/>


      </div>

      
    </div>
  );
}

export default Info;
