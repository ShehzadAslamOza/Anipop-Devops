import React from "react";
import Card from "./Card";
import "./CardWrapper.css";

export default function CardWrapper() {
  return (
    <div className="card-wrapper">
      <Card
        title="Online Passes"
        description="Visit Ticketwala to get your passes now"
        action="Visit Ticketwala"
      />
      <Card
        title="Physical Passes"
        description="Visit our brand ambassodors to get your passes now"
        action="Find a brand ambassodor"
      />
    </div>
  );
}
