import React from "react";
import "./EducationCard.css";

const EducationCard = ({ degree, institution, year, details }) => {
  return (
    <div className="education-card">
      <h3>{degree}</h3>
      <h4>{institution}</h4>
      <p className="year">{year}</p>
      {details && <p className="details">{details}</p>}
    </div>
  );
};

export default EducationCard;
