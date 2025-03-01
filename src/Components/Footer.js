import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import footerLogo from "../Assets/logo/2.svg";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
            <img src={footerLogo} alt="FR Society Logo" />
            </p>
            <p className="ft-description">
            FR Society, a non-profit in Rehla, Jharkhand, is dedicated to uplifting underprivileged communities.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
  <p className="ft-list-title">Our Initiatives</p>
  <ul className="ft-list-items">
    <li>
      <a href="#mission">Faizan-e-Raza (Education & Learning)</a>
    </li>
    <li>
      <a href="#mission">Kalam-e-Raza (E-books & Literature)</a>
    </li>
    <li>
      <a href="#mission">Shifa-e-Raza (Healthcare & Welfare)</a>
    </li>
    <li>
      <a href="#mission">Jashn-e-Raza (Events & Celebrations)</a>
    </li>
  </ul>
</div>



        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Contact Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:frsociety786@gmail.com">
              frsociety786@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:9006978778">+91 9006978778</a>
            </li>
            <li>
            <a href="#">
    <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "8px", color: "#a5a7ac" }} />
    Dandila Kalan, Rehla <br /> Palamu, Jharkhand
  </a>
  </li>

          </ul>
        </div>
      </div>

      <div className="ft-copyright">
      <p>© 2021-{currentYear} FR Society. All rights reserved. </p>

        <ul className="ft-social-links">
        <li>
  <a
    href="https://www.instagram.com/jashneraza/"
    title="Instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 448 512"
    >
      <path d="M224 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S338.9 319.5 338.9 255 287.6 140 224 140zm0 188.4c-41.7 0-75.5-33.8-75.5-75.5s33.8-75.5 75.5-75.5S299.5 212.2 299.5 253.9 265.7 328.4 224 328.4zm159.1-272H64.9C29.1 67.4 0 96.5 0 132.2v247.6c0 35.7 29.1 64.9 64.9 64.9h318.2c35.7 0 64.9-29.1 64.9-64.9V132.2c-.1-35.7-29.2-64.8-64.8-64.8zm36.6 312.5c0 20.2-16.4 36.6-36.6 36.6H64.9c-20.2 0-36.6-16.4-36.6-36.6V132.2c0-20.2 16.4-36.6 36.6-36.6h318.2c20.2 0 36.6 16.4 36.6 36.6v247.6z"/>
    </svg>
  </a>
</li>


          <li>
            <a
              href="https://facebook.com/"
              title="FaceBook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
          </li>
        </ul>
       
      </div>
      
    </div>
  );
}

export default Footer;
