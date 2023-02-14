import React from "react";

function Button(props) {
  return (
    <div className={props.class}>
      <a href={props.link}>
        <button className="btn">{props.text}</button>
      </a>
    </div>
  );
}

export default Button;
