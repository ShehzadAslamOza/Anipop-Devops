import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Homepage.css";
import TopScreen from "./HomePageComponents/TopScreen";
import Sponsors from "./HomePageComponents/Sponsors";

export default function Homepage() {
  return (
    <div>
      <section id="screen1">
        <Navbar />
        <div className="buffer"></div>
        <TopScreen />
      </section>
      <section id="screen2">
        <Sponsors />
      </section>
      <section id="screen3"></section>
    </div>
  );
}
