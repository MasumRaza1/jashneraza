import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";
import logo from "../Assets/logo/1.svg";
function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const currentYear = new Date().getFullYear();
  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
        <img src={logo} alt="frsociety Logo" />
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        FR Society is a non-profit organization based in Rehla, Jharkhand, committed to serving underprivileged and marginalized communities in the region. Our mission is to uplift the underprivileged and foster a brighter future for all.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        FR Society respects the privacy of its users and is committed to protecting their personal information. Any information collected by FR Society will be used solely for the purpose of providing services to individuals in need and will not be shared with third parties without explicit consent.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        <ol>
    <li><strong>Services:</strong> FR Society provides financial support to individuals to help them meet their basic needs, such as paying for medical expenses or educational fees. This support is provided based on the organization's assessment of the individual's needs and available resources.</li>
    <li><strong>Eligibility:</strong> Individuals seeking assistance from FR Society must meet the organization's eligibility criteria, which may include factors such as income level, residency status, and specific needs assessment.</li>
    <li><strong>Application Process:</strong> Individuals can apply for assistance by submitting an application form, providing relevant documentation to support their request, and undergoing a needs assessment conducted by FR Society.</li>
    <li><strong>Decision Making:</strong> Decisions regarding the provision of assistance are made at the discretion of FR Society based on the individual's needs and available resources. The organization reserves the right to deny assistance or modify the amount of assistance provided based on its assessment.</li>
    <li><strong>Confidentiality:</strong> FR Society respects the confidentiality of individuals seeking assistance and will not disclose their personal information without their consent, except as required by law.</li>
    <li><strong>Feedback and Complaints:</strong> Individuals who have received assistance from FR Society are encouraged to provide feedback on their experience and to raise any complaints or concerns they may have. The organization will address all feedback and complaints in a timely and respectful manner.</li>
</ol>


        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        Individuals seeking assistance from FR Society can schedule consultations with our team to discuss their needs and explore available support options. Consultations are conducted in a confidential and respectful manner, and individuals are encouraged to ask any questions they may have about the assistance process.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        <ol>
        <li><strong>Application:</strong> Submit a form with necessary details.</li>
            <li><strong>Assessment:</strong> Our team evaluates the request.</li>
            <li><strong>Decision:</strong> Aid is allocated based on needs and resources.</li>
            <li><strong>Notification:</strong> Applicants receive updates on their request.</li>
            <li><strong>Support:</strong> Approved applicants receive assistance.</li>
            <li><strong>Follow-up:</strong> We ensure continued support where necessary.</li>
          </ol>


        </p>
      </div>

      <div className="legal-footer">
      <p>© 2021-{currentYear} FR Society. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
