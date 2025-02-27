import React, { useEffect, useState } from "react";
import HeroImage from "../Assets/hero-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping , faAngleUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";


function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToDonate = () => {
    const donateSection = document.getElementById("donate");
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const handleVolunteerRegistrationClick = () => {
    navigate("/volunteer-registration");
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
          <p className="text-headline">❤️ Every Moment, With You</p>
          <h2 className="text-title">
          Empowering Communities
          </h2>
          <p className="text-descritpion">
          FR Society, a non-profit in Rehla, Jharkhand, empowers underprivileged communities by providing medical and educational support for a brighter future.
          </p>
          <p className="text-descritpion">
          <p style={{ fontSize: "1rem", fontStyle: "italic", color: "#333", padding:"10px 0px 0px 0px", fontFamily: "'merriweather'"}}> 
  Mehre Charkhe Nubuwwat pe Roshān Durūd <br />  
  Ghul-e-Bāgh-e-Risālat pe Lākhōñ Salām...  
</p>

          </p>
          <div className="button-container">
  <button
    className="text-donate-btn"
    type="button"
    onClick={() => {
      const donateSection = document.getElementById("donate");
      if (donateSection) {
        donateSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    <FontAwesomeIcon icon={faHeart} /> Donate
  </button>

  <button
    className="outlined"
    type="button"
    onClick={handleVolunteerRegistrationClick}
  >
    <FontAwesomeIcon icon={faHandsHelping} /> Become Volunteer
  </button>
</div>

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
          <img className="hero-image1" src={HeroImage} alt="Hero Image" />
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
