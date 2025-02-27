import React from "react";
import "../Styles/Mission.css";
import { FaBookOpen, FaGraduationCap, FaHeartbeat, FaCalendarAlt } from "react-icons/fa";
import jashneraza from "../Assets/branches_logo/jashneraza.svg";
import shifaeraza from "../Assets/branches_logo/shifaeraza.svg";
import kalameraza from "../Assets/branches_logo/kalameraza.svg";
import faizaneraza from "../Assets/branches_logo/faizaneraza.svg";

const Ourmissions = () => {
    const missions = [
        {
            title: "Faizan-e-Raza",
            description: "Providing Quranic learning and Islamic education for all age groups.",
            icon: <FaGraduationCap />,
            bgColor: "#fff",
            textColor: "#333",
            branchLogo: faizaneraza
        },
        {
            title: "Kalam-e-Raza",
            description: "Preserving and sharing the literature and e-books of Ala Hazrat.",
            icon: <FaBookOpen />,
            bgColor: "#fff",
            textColor: "#222",
            branchLogo: kalameraza
        },
        {
            title: "Shifa-e-Raza",
            description: "Offering healthcare and social welfare support to those in need.",
            icon: <FaHeartbeat />,
            bgColor: "#fff",
            textColor: "#222",
            branchLogo: shifaeraza
        },
        {
            title: "Jashn-e-Raza",
            description: "Organizing events and celebrations that bring the community together.",
            icon: <FaCalendarAlt />,
            bgColor: "#fff",
            textColor: "#222",
            branchLogo: jashneraza
        },
    ];

    return (
        <section className="ourmissions-section">
            <div className="ourmissions-container">
                <h2 className="ourmissions-title"><span>Our Mission</span></h2>
                <p className="ourmissions-description">
                    FR Society is dedicated to educational, social, and welfare activities, ensuring a positive impact on society.
                </p>
               
  
                <p className="quote">
  Yā Ilāhī sard-e-mehrī par ho jab khurshīd-e-ḥashr, <br />
  Sayyad-e-besāyah ke zill-e-lawā kā sāth ho...
</p>

                <div className="ourmissions-grid">
                    {missions.map((mission, index) => (
                        <div 
                            key={index} 
                            className="mission-card" 
                            style={{ backgroundColor: mission.bgColor, color: mission.textColor }}
                        >
                            <div className="mission-icon">{mission.icon}</div>
                            <h3 className="mission-title">{mission.title}</h3>
                            <p className="mission-description">{mission.description}</p>
                            {mission.branchLogo && <img className="info-card-image" src={mission.branchLogo} alt={mission.title} />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ourmissions;
