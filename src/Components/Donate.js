import React from "react";
import "../Styles/Donate.css";
import qrCode from "../Assets/qrcode_www.codewithfaraz.com.png"; // Ensure the path is correct

function Donate() {
  return (
    <div className="donate-container">
      <h2 className="donate-title">
        <span>Support FR Society</span>
      </h2>

      <p className="donate-description">
        Your generous donation helps us continue our mission of supporting those in need.
      </p>
      <p
        style={{
          fontSize: "1rem",
          fontStyle: "italic",
          color: "#795484",
          padding: "5px 0px 30px 0px",
          fontFamily: "'merriweather'",
          letterSpacing: 1,
        }}
      >
        Kyā Maḥak Hai Ki Mu'attar Hai Dimāġh-e-‘Ālam, <br />
        Takhta-e-Gulshan-e-Firdaus Hai Rauẓa Terā...
      </p>

      <div className="donate-content">
        {/* Left - Bank Details */}
        <div className="donate-details">
          <h3>Bank Transfer</h3>
          <div className="detail-card">
            <p>
              <strong>Account Name:</strong> FR Society
            </p>
            <p>
              <strong>Account Number:</strong> 1234567890
            </p>
            <p>
              <strong>Bank Name:</strong> HDFC
            </p>
            <p>
              <strong>IFSC Code:</strong> ABCD0123456
            </p>
            <p>
              <strong>Account Type:</strong> Current
            </p>
          </div>
        </div>

        {/* Right - QR Code */}
        <div className="donate-qr">
          <h3>Scan to Pay</h3>
          <div className="qr-card">
            <img src={qrCode} alt="QR Code for Donation" className="qr-image" />
          </div>
        </div>
      </div>

      {/* Donate Button */}
      <div className="donate-button-container">
      <a href="https://rzp.io/rzp/Tm0hAxO" target="_blank" rel="noopener noreferrer">
        <button className="donate-button">Donate Online</button>
      </a>
      </div>
    </div>
  );
}

export default Donate;
