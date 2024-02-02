import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ModulePage.css";
import Mascot from "./media/Mascot Yassify.png";
import StageModule from "./Modules/StageModule";
import "./ModuleButtons/ArtsButton.css";
import "./ModuleButtons/AuditoriumButton.css";
import "./ModuleButtons/GamingButton.css";
import "./ModuleButtons/StageButton.css";
import "./ModuleButtons/VolleyballButton.css";
import ArtsModule from "./Modules/ArtsModule";
import Gaming from "./Modules/Gaming";
import Volleyball from "./Modules/Volleyball";
import Auditorium from "./Modules/Auditorium";
import ModuleInfo from "./Modules/ModuleInfo";

export default function ModulePage() {
  return (
    <div>
      <section id="screen7">
        <div className="buffer"></div>
        <ModuleInfo />
        <Navbar />
      </section>
      <section id="screen8" className="module-section">
        <StageModule />
      </section>
      <section id="screen9" className="module-section">
        <ArtsModule />
      </section>
      <section id="screen10" className="module-section">
        <Gaming />
      </section>
      <section id="screen11" className="module-section">
        <Volleyball />
      </section>
      <section id="screen12" className="module-section">
        <Auditorium />
      </section>
    </div>
  );
}
