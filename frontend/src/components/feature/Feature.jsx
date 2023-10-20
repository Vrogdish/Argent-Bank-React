import React from "react";
import "./style.css"

export default function Feature({ featureItem }) {
  return (
    <div className="feature-item">
      <img src={featureItem.icon} alt={featureItem.title} className="feature-icon" />
      <h3 className="feature-item-title">{featureItem.title}</h3>
      <p>{featureItem.text}</p>
    </div>
  );
}
