import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";
import logo from "../Assets/jashneraza_logo.svg";
function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const currentYear = new Date().getFullYear();
  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
        <img src={logo} alt="Jashneraza Logo" />
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Jashn-e-Raza is a non-profit organization based in Rehla, Jharkhand, committed to serving underprivileged and marginalized communities in the region. Our mission is to uplift the underprivileged and foster a brighter future for all.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        Jashn-e-Raza respects the privacy of its users and is committed to protecting their personal information. Any information collected by Jashn-e-Raza will be used solely for the purpose of providing services to individuals in need and will not be shared with third parties without explicit consent.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        <ol>
    <li><strong>Services:</strong> Jashn-e-Raza provides financial support to individuals to help them meet their basic needs, such as paying for medical expenses or educational fees. This support is provided based on the organization's assessment of the individual's needs and available resources.</li>
    <li><strong>Eligibility:</strong> Individuals seeking assistance from Jashn-e-Raza must meet the organization's eligibility criteria, which may include factors such as income level, residency status, and specific needs assessment.</li>
    <li><strong>Application Process:</strong> Individuals can apply for assistance by submitting an application form, providing relevant documentation to support their request, and undergoing a needs assessment conducted by Jashn-e-Raza.</li>
    <li><strong>Decision Making:</strong> Decisions regarding the provision of assistance are made at the discretion of Jashn-e-Raza based on the individual's needs and available resources. The organization reserves the right to deny assistance or modify the amount of assistance provided based on its assessment.</li>
    <li><strong>Confidentiality:</strong> Jashn-e-Raza respects the confidentiality of individuals seeking assistance and will not disclose their personal information without their consent, except as required by law.</li>
    <li><strong>Feedback and Complaints:</strong> Individuals who have received assistance from Jashn-e-Raza are encouraged to provide feedback on their experience and to raise any complaints or concerns they may have. The organization will address all feedback and complaints in a timely and respectful manner.</li>
</ol>


        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        Individuals seeking assistance from Jashn-e-Raza can schedule consultations with our team to discuss their needs and explore available support options. Consultations are conducted in a confidential and respectful manner, and individuals are encouraged to ask any questions they may have about the assistance process.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        <ol>
    <li>
        <strong>Application:</strong> Individuals can apply for assistance by submitting an application form, which includes details about their personal information, financial situation, and specific needs.
    </li>
    <li>
        <strong>Assessment:</strong> Upon receiving an application, Jashn-e-Raza conducts a needs assessment to evaluate the individual's eligibility for assistance and determine the amount and type of support needed.
    </li>
    <li>
        <strong>Decision Making:</strong> Based on the assessment, Jashn-e-Raza makes a decision regarding the provision of assistance, taking into account the individual's needs and available resources.
    </li>
    <li>
        <strong>Notification:</strong> Once a decision has been made, Jashn-e-Raza notifies the individual of the outcome and provides information on the next steps, including any additional documentation required or follow-up consultations.
    </li>
    <li>
        <strong>Support:</strong> If assistance is approved, Jashn-e-Raza provides the necessary support to the individual, which may include financial assistance, access to resources, or referrals to other service providers.
    </li>
    <li>
        <strong>Follow-up:</strong> Jashn-e-Raza conducts follow-up assessments to monitor the individual's progress and ensure that they continue to receive the support they need to achieve their goals.
    </li>
</ol>

        </p>
      </div>

      <div className="legal-footer">
      <p>© 2021-{currentYear} Jashn-e-Raza. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
