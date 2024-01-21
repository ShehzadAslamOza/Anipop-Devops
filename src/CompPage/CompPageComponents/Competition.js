import React from "react";
import "./Competition.css";

export default function Competition(props) {
  return (
    <div
      className="comp-card"
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
      }}
    >
      <div></div>
      <h1 className="comp-title">{props.title}</h1>
      <p className="comp-desc">{props.description}</p>

      <a className="comp-link" href={props.link}>
        <button className="comp-btn">Register Now</button>
      </a>

      <div></div>
    </div>
  );
}
