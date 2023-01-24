import React from "react";

function Button(props) {
  return (
    <div className={props.class}>
      <button className="btn">{props.text}</button>
    </div>
  );
}

export default Button;
