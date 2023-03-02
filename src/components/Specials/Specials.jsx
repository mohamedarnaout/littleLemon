import React from "react";
import Button from "../Button/Button";
import Cards from "../Cards/Cards";

function Specials() {
  return (
    <div className="specials">
      <div className="grid">
        <h1 className="specials_header">Specials</h1>
        <Button
          class="specials_btn"
          text="Online Menu"
          link="https://www.youtube.com/watch?v=6hOoQfF0KRM"
        />
      </div>
      <div className="grid">
        <Cards />
      </div>
    </div>
  );
}

export default Specials;
