import React from "react";
import "./TopScreen.css";
import { Link } from "react-router-dom";

export default function TopScreen() {
  return (
    <>
      <div className="img-container">
        <Link to="/passes">
          <button className="pass-btn">Get Passes </button>
        </Link>
      </div>
    </>
  );
}
