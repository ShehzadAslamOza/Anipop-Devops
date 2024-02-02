import React from "react";
import Navbar from "../Navbar/Navbar";
import "./PassPage.css";
import CardWrapper from "./PassPageComponents/CardWrapper";
import BAcard from "./PassPageComponents/BA-card";

export default function PassPage() {
  return (
    <div>
      <section id="pass-screen1">
        <Navbar />
        <div className="buffer"></div>
        <CardWrapper />
      </section>
      <section id="pass-screen2">
        <h1 className="BA-title">Our Brand Ambassadors</h1>
        <div className="BA-container">
          <BAcard
            name="Shaikh Jehanzeib Saeed"
            university="Aga Khan University"
            location="DHA Phase 7"
            contact="Opposite Bilal Masjid"
          />
          <BAcard
            name="Muhammad Areez Larik"
            university="Ziauddin University"
            location="DHA Phase 6"
            contact="03323152169"
          />
          <BAcard
            name="Lizzi"
            university="Iqra University"
            location="Malir Cant"
            contact="03360352899"
          />
          <BAcard
            name="Ahmed Hassaan"
            university="Tabani's College"
            location="Bahadurabad"
            contact="03352266557"
          />
          <BAcard
            name="Muhammad Hasan"
            university="PAF KIET"
            location="DHA Phase 6"
            contact="03142324669"
          />
          <BAcard
            name="Alesha Rehman"
            university="Karachi University"
            location="North Karachi"
            contact="03221200180"
          />
          <BAcard
            name="Haris Akhtar"
            university="IOBM"
            location="Gulshan e jamal"
            contact="03363113559"
          />
          <BAcard
            name="Julees Iftikhar Tunio"
            university="Nixor College"
            location="Clifton"
            contact="03061701233"
          />
          <BAcard
            name="Sameer Razzaq"
            university="Iqra University"
            location="Bahria Town Karachi"
            contact="03481135633"
          />
          <BAcard
            name="Sakshi Bodani"
            university="Commecs College"
            location="Gulistan e Johar"
            contact="03313291975"
          />
          <BAcard
            name="Hiba"
            university="IBA Karachi"
            location="Capital Society"
            contact="03470700879"
          />
          <BAcard
            name="Fahad Ali Shah"
            university="Habib University"
            location="Falcon Complex Faisal"
            contact="03001307116"
          />
          <BAcard
            name="Usayd Saeed"
            university="Denning Law School"
            location="DHA Phase 6"
            contact="03452442963"
          />
          <BAcard
            name="Abdullah Ahmed"
            university="Aga Khan University"
            location="DHA Phase 4"
            contact="03322381620"
          />
        </div>
      </section>
    </div>
  );
}
