import React from "react";
import "./Card.css";
import { useState } from "react";

export default function Card(props) {
  const [isMobile] = useState(window.innerWidth < window.innerHeight);

  return (
    <div className="card">
      <img src={props.img} class="card__image" alt="" />
      <h2 className="card__title card_elem">{props.title}</h2>
      <p className="card__description card_elem">{props.description}</p>

      {!isMobile ? (
        <button className="card__btn card_elem">
          <div className="arrow-container">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <a href={props.link} class="button-text">
              {props.action}
            </a>
          </div>
        </button>
      ) : (
        <button className="mobile-btn card__btn card_elem">
          <div>
            <a href={props.link} class="">
              {props.action}
            </a>
          </div>
        </button>
      )}
    </div>
  );
}
