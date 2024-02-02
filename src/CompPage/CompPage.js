import React from "react";
import Navbar from "../Navbar/Navbar";
import "./CompPage.css";
import "./CompPage.css";
import CompetitionInfo from "./CompPageComponents/CompetitionInfo";
import Competition from "./CompPageComponents/Competition";
import mic from "./media/mic.jpg";
import da from "./media/da.jpg";
import va from "./media/va.jpg";

import z from "./media/z.jpg";
export default function CompPage() {
  return (
    <div>
      <section id="comp-screen1">
        <Navbar />
        <div className="buffer"></div>
        <CompetitionInfo />
      </section>
      <section id="comp-screen2">
        <Competition
          title="Animation"
          description="Welcome to the Animation Competition, where you embark on an animated adventure like never before. Infuse your art with personality, craft mesmerizing stories through the magic of animation, and unveil your artistic brilliance. Easily submit your masterpieces using these forms, and be a contender for the spotlight in this animated showdown. Join us as we celebrate the art of animation, where every frame tells a unique tale."
          link="https://forms.gle/s21CyjF6QMUJDVgs6"
          img={z}
        />
      </section>
      <section id="comp-screen3">
        {" "}
        <Competition
          title="Voice Acting"
          description="Welcome to the Voice Acting Competition, where you can unleash your vocal prowess! Elevate your storytelling skills, breathe life into characters, and captivate audiences with your unique voice. Submit your entries seamlessly through this form, and let your voice be the star of this thrilling competition. 
          "
          link="https://forms.gle/hiP3ovufPiQFPEiw7"
          img={va}
        />
      </section>
      <section id="comp-screen4">
        {" "}
        <Competition
          title="Digital Art"
          description="Welcome to OC roulette, IBACON's own digital art competition module! 
          In OC roulette, each competitor will be assigned a completely random theme, serving as the catalyst for the creation of a captivating original character."
          link="https://forms.gle/iYckXygoQktUPRq6A"
          img={da}
        />
      </section>
      <section id="comp-screen5">
        {" "}
        <Competition
          title="Singing"
          description="Welcome to Geeks Got Talent, where musical boundaries fade and voices take centre stage!
          In this electrifying singing competition, participants will dazzle you with performances from three vibrant categories: Pop, K-pop, and J-pop."
          link="https://forms.gle/GMYhbXVhbxFG65jb8"
          img={mic}
        />
      </section>
    </div>
  );
}
