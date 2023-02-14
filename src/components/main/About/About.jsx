import React from "react";
import Button from "../../Button/Button";
import pic from "../../../media/icons_assets/restauranfood.jpg";
function About() {
  return (
    <div className="grid about">
      <div className="about_text">
        <h1 className="about_text-header">Little Lemon</h1>
        <h3 className="about_text-header3">Chicago</h3>
        <p className="about_text-par">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          class="about_text-btn"
          text="Reserve a Table"
          link="https://www.youtube.com/watch?v=6hOoQfF0KRM"
        />
      </div>
      <div className="about_pic">
        <img src={pic} alt="food pic" className="about_pic-img" />
      </div>
    </div>
  );
}

export default About;
