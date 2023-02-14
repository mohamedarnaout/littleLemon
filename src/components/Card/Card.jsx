import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="card-pic" src={props.img} />
      <h1 className="card-header">{props.header}</h1>
      <p className="card-price">{props.price}</p>
      <p className="card-par">{props.par}</p>
      <h3 className="card-footer">{props.footer}</h3>
    </div>
  );
}

export default Card;
