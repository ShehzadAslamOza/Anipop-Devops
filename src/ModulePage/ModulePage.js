import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ModulePage.css";

export default function ModulePage() {
  return (
    <div>
      <section id="screen1">
        <Navbar />
        <div className="buffer"></div>
        <p>Module Page</p>
      </section>
      <section id="screen2"></section>
      <section id="screen3"></section>
    </div>
  );
}
