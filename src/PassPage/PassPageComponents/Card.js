import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} class="card__image" alt="" />
      <h2 className="card__title card_elem">{props.title}</h2>
      <p className="card__description card_elem">{props.description}</p>

      <button className="card__btn card_elem">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <a href={props.link} class="button-text">
          {props.action}
        </a>
      </button>
    </div>
  );
}
