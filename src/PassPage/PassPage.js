import React from "react";
import Navbar from "../Navbar/Navbar";
import "./PassPage.css";
import CardWrapper from "./PassPageComponents/CardWrapper";

export default function PassPage() {
  return (
    <div>
      <section id="pass-screen1">
        <CardWrapper />
        <Navbar />
      </section>
      <section id="pass-screen2"></section>
    </div>
  );
}
