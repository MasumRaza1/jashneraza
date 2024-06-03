import React, { useEffect, useState } from "react";
import Doctor from "../Assets/hero-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping , faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";


function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Uplifting Lives Together</p>
          <h2 className="text-title">
          Empowering Communities, Building Futures
          </h2>
          <p className="text-descritpion">
          Jashn-e-Raza, a non-profit in Rehla, Jharkhand, is dedicated to uplifting underprivileged communities.
          We offer financial support for basic needs, including medical expenses and education fees, to foster a brighter future for all.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faHandsHelping}  /> Become Volunteer
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>150+</p>
              <p>Lives Impacted</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Supported Initiatives</p>
            </div>

            <div className="text-stats-container">
              <p>25+</p>
              <p>Volunteers</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
