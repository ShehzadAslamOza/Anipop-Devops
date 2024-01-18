import React from "react";

import "./BA-card.css";

export default function BAcard(props) {
  return (
    <div class="BA-card">
      <h1 className="top">{props.name}</h1>
      <p class="title">{props.university}</p>
      <p>{props.location}</p>
      <p className="bot">{props.contact}</p>
    </div>
  );
}
