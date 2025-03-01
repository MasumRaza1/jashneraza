import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/VolunteerForm.css";
import logo from "../Assets/logo/1.svg";

function VolunteerForm() {
  const currentYear = new Date().getFullYear();
  const formRef = useRef(null);

  const handleSubmit = () => {
    // Delay toast to ensure form is submitted
    setTimeout(() => {
      toast.success("Volunteer Form Submitted Successfully!", {
        position: "top-center",
        autoClose: 3000,
      });

      // Reset form after submission
      formRef.current.reset();
    }, 500);
  };

  return (
    <div className="Volunteer-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          <img src={logo} alt="Jashneraza Logo" />
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">Become a Volunteer</h2>

        {/* Form with ref for reset and target iframe to prevent redirection */}
        <form
          ref={formRef}
          action="https://docs.google.com/forms/d/e/1FAIpQLSfbjFCcP_27i-r6LGIGtNU1rqLYmpogV-G15ZRN134vnxcB0w/formResponse"
          method="POST"
          className="form-content"
          target="hidden_iframe"
          onSubmit={handleSubmit}
        >
          <label className="required">
            Full Name:
            <input type="text" name="entry.1801659996" required />
          </label>

          <label className="required">
            Phone Number:
            <input type="tel" name="entry.1281494012" required />
          </label>

          <label className="required">
            E-mail ID:
            <input type="email" name="entry.2137810176" required />
          </label>

          <label className="required">
            Address:
            <input type="text" name="entry.1726998935" required />
          </label>

          <label className="required">
            Preferred Role:
            <select name="entry.17841261" required>
              <option value="">Select</option>
              <option value="eventSupport">Event Support</option>
              <option value="fundraising">Fundraising</option>
              <option value="socialMedia">Social Media</option>
              <option value="teaching">Teaching</option>
            </select>
          </label>

          <label className="required">
            Area of Interest:
            <select name="entry.1317910094" required>
              <option value="">Select</option>
              <option value="faizan-e-raza">Faizan-e-Raza (Institute for learning Quran)</option>
              <option value="shifa-e-raza">Shifa-e-Raza (Health camp)</option>
              <option value="jashn-e-raza">Jashn-e-Raza (Event & celebration)</option>
              <option value="kalam-e-raza">Kalam-e-Raza (E-books and literature)</option>
            </select>
          </label>

          <button type="submit" className="text-Volunteer-btn custom-button">
            Confirm Application
          </button>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2021-{currentYear} FR Society. All rights reserved.</p>
      </div>

      {/* Hidden iframe to prevent redirection */}
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

      <ToastContainer />
    </div>
  );
}

export default VolunteerForm;
