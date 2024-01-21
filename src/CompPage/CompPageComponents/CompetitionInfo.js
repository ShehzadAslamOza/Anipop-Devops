import React from "react";
import "./CompetitionInfo.css";

export default function CompetitionInfo() {
  return (
    <div className="comp-container">
      <h1>Competitions</h1>
      <p>
        Registrations/Submissions are now open for
        <div className="link-container">
          <a href="#comp-screen2">Animation</a>
          <a href="#comp-screen3"> Voice Acting</a>
          <a href="#comp-screen4"> Digital Art</a>
          <a href="#comp-screen5"> Singing </a>
        </div>
        <p>
          Unleash your creativity at IBA CON! 🚀 Join us on 11th Feb for a day
          filled with artistic expression and win some Amazing Prizes! 🎨🎤✨
        </p>
      </p>
    </div>
  );
}
