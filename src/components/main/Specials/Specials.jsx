import React from "react";
import Button from "../../Button/Button";
import Card from "../../Card/Card";
import saladpic from "../../../media/icons_assets/greeksalad.jpg";
import bruchettapic from "../../../media/icons_assets/bruchetta.svg";
import dessertpic from "../../../media/icons_assets/lemon dessert.jpg";

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
        <div className="Cards">
          <Card
            img={saladpic}
            header="Greek salad"
            price="$12.99"
            par="  The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and
          rosemary croutons."
            footer="Order a delivery"
          />
          <Card
            img={bruchettapic}
            header="Bruchetta"
            price="$5.99"
            par="Our Bruschetta is made from grilled bread that has been smeared with
        garlic and seasoned with salt and olive oil."
            footer="Order a delivery"
          />
          <Card
            img={dessertpic}
            header="Lemon Dessert"
            price="$5.00"
            par="This comes straight from grandma’s recipe book, every last
          ingredient has been sourced and is as authentic as can be imagined."
            footer="Order a delivery"
          />
        </div>
      </div>
    </div>
  );
}

export default Specials;
