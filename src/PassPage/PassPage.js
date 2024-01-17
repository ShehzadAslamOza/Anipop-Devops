import React from "react";
import Navbar from "../Navbar/Navbar";
import "./PassPage.css";
import CardWrapper from "./PassPageComponents/CardWrapper";

export default function PassPage() {
  return (
    <div>
      <section id="screen1">
        <CardWrapper />
        <Navbar />
      </section>
      <section id="screen2"></section>
    </div>
  );
}
