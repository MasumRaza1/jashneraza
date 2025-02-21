import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard(props) {
  return (
    <div className="info-cards">
      <span className="info-card-icon">
        <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
      </span>
      <p className="info-card-title">{props.title}</p>
      <p className="info-card-description">{props.description}</p>
      <img className="info-card-image" src={props.branchLogo} alt={props.title} />

    </div>
  );
}

export default InformationCard;
