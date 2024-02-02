import React from "react";
import "./Module.css";

export default function Module(props) {
  return (
    <div
      className="mod-card"
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
      }}
    >
      <div></div>
      <h1 className="mod-title">{props.title}</h1>
      <p className="mod-desc">{props.description}</p>

      <p className="mod-title">{props.fi}</p>

      <div></div>
    </div>
  );
}
