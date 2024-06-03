import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import profile5 from "../Assets/profile-5.png";
import profile6 from "../Assets/profile-6.png";
import "../Styles/Doctors.css";

function Volunteers() {
  return (
    <div className="doctor-section" id="volunteers">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our volunteers</span>
        </h3>

        <p className="dt-description">
        At Jashn-e-Raza, our volunteers are the heart and soul of our organization. They play a vital role in helping us fulfill our mission of serving underprivileged and marginalized communities in Rehla, Jharkhand. 
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Mr. Kaushar Alam"
          title="Volunteer"
          stars="1.2"
          reviews="11"
        />
        <DoctorCard
          img={profile2}
          name="Er. Shahid Raza"
          title="Volunteer"
          stars="4.8"
          reviews="0"
        />
        <DoctorCard
          img={profile3}
          name="Mr. Shahzad Alam"
          title="Volunteer"
          stars="4.7"
          reviews="0"
        />
        <DoctorCard
          img={profile4}
          name="Er. Doladey Khan"
          title="Chairman"
          stars="1.1"
          reviews="7"
        />
         <DoctorCard
          img={profile5}
          name="MD. Faizan Alam"
          title="Volunteer"
          stars="4.8"
          reviews="0"
        />
         <DoctorCard
          img={profile6}
          name="Mr. Jamshed Alam"
          title="Volunteer"
          stars="4.8"
          reviews="0"
        />
      </div>
    </div>
  );
}

export default Volunteers;
