import React from "react";
import Navbar from "../Navbar/Navbar";
import "./PassPage.css";
import CardWrapper from "./PassPageComponents/CardWrapper";
import BAcard from "./PassPageComponents/BA-card";

export default function PassPage() {
  return (
    <div>
      <section id="pass-screen1">
        <CardWrapper />
        <Navbar />
      </section>
      <section id="pass-screen2">
        <div className="BA-container">
          <BAcard
            name="Shaikh Jehanzeib Saeed"
            university="Aga Khan University"
            location="DHA Phase 7"
          />
          <BAcard
            name="Muhammad Areez Larik"
            university="Ziauddin University"
            location="DHA Phase 6"
          />
          <BAcard
            name="Lizzi"
            university="Iqra University"
            location="Malir Cant"
          />
          <BAcard
            name="Ahmed Hassaan"
            university="Tabani's College"
            location="Bahadurabad"
          />
          <BAcard
            name="Muhammad Hasan"
            university="PAF KIET"
            location="DHA Phase 6"
          />
          <BAcard
            name="Alesha Rehman"
            university="Karachi University"
            location="North Karachi"
          />
          <BAcard
            name="Haris Akhtar"
            university="IOBM"
            location="Gulshan e jamal"
          />
          <BAcard
            name="Julees Iftikhar Tunio"
            university="Nixor College"
            location="Clifton"
          />
          <BAcard
            name="Sameer Razzaq"
            university="Iqra University"
            location="Bahria Town Karachi"
          />
          <BAcard
            name="Sakshi Bodani"
            university="Commecs College"
            location="Gulistan e Johar"
          />
          <BAcard
            name="Hiba"
            university="IBA Karachi"
            location="Capital Society"
          />
          <BAcard
            name="Fahad Ali Shah"
            university="Habib University"
            location="Falcon Complex Faisal"
          />
          <BAcard
            name="Usayd Saeed"
            university="Denning Law School"
            location="DHA Phase 6"
          />
          <BAcard
            name="Abdullah Ahmed"
            university="Aga Khan University"
            location="DHA Phase 4"
          />
        </div>
      </section>
    </div>
  );
}
