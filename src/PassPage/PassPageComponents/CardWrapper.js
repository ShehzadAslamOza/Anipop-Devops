import React from "react";
import Card from "./Card";
import "./CardWrapper.css";
import twlogo from "./media/tw.png";

export default function CardWrapper() {
  return (
    <div className="card-wrapper">
      <Card
        title="Online Passes"
        description="Visit Ticketwala to get your passes now"
        action="Visit  on   Ticketwala"
        link="https://ticketwala.pk/event/iba-con"
        img={twlogo}
      />
      <Card
        title="Physical Passes"
        description="Get in touch with our brand ambassodors to get your passes now"
        action="Find a brand ambassodor"
        link="#pass-screen2"
        img={twlogo}
      />
    </div>
  );
}
