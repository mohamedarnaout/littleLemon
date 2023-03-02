import React from "react";
import Card from "../Card/Card";
import saladpic from "../../media/greeksalad.jpg";
import bruchettapic from "../../media/bruchetta.svg";
import dessertpic from "../../media/lemon dessert.jpg";

function Cards() {
  return (
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
  );
}

export default Cards;
