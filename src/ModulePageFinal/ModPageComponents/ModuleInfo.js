import React from "react";
import "./ModuleInfo.css";

export default function ModuleInfo() {
  return (
    <div className="mod-container">
      <h1>Modules</h1>
      <p>
        Welcome to the Future of IBACON
        <div className="mod-link-container">
          <a href="#mod-screen2">Stage</a>
          <a href="#mod-screen3"> Arts</a>
          <a href="#mod-screen4"> Gaming</a>
          <a href="#mod-screen6"> Auditorium </a>
          <a href="#mod-screen5"> Volleyball </a>
        </div>
        <p>
          Embark on an exciting journey at IBACON, where knowledge meets
          entertainment. Discover diverse modules designed for every interest,
          from expert-led sessions to hands-on workshops. Brace yourself for
          gaming tournaments, awesome activities, and surprises that promise an
          unforgettable experience.
        </p>
      </p>
    </div>
  );
}
