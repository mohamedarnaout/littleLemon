import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="card-pic" src={props.img} />
      <div className="card-content">
        <div className="card_header">
          <h1 className="card-header">{props.header}</h1>
          <p className="card-price">{props.price}</p>
        </div>

        <p className="card-par">{props.par}</p>
        <h3 className="card-footer">{props.footer}</h3>
      </div>
    </div>
  );
}

export default Card;
