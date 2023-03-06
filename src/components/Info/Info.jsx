import React from "react";
import Button from "../Button/Button";
import pic from "../../media/restauranfood.jpg";
function Info() {
  return (
    <div className="grid info">
      <div className="info_text">
        <h1 className="info_text-header">Little Lemon</h1>
        <h3 className="info_text-header3">Chicago</h3>
        <p className="info_text-par">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          class="info_text-btn"
          text="Reserve a Table"
          link="https://www.youtube.com/watch?v=6hOoQfF0KRM"
        />
      </div>
      <div className="info_pic">
        <img src={pic} alt="food pic" className="info_pic-img" />
      </div>
    </div>
  );
}

export default Info;
