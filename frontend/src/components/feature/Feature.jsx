import React from "react";
import "./style.css"

export default function Feature({ featureItem }) {
  return (
    <div class="feature-item">
      <img src={featureItem.icon} alt={featureItem.title} class="feature-icon" />
      <h3 class="feature-item-title">{featureItem.title}</h3>
      <p>{featureItem.text}</p>
    </div>
  );
}
