import person1 from "../../media/person1.jpg";
import person2 from "../../media/person2.jpg";
import person3 from "../../media/person3.jpg";
import person4 from "../../media/person4.jpg";
import Testimonial from "../Testimonial/Testimonial";

function Testimonials() {
  return (
    <div className="testimonials">
      <h1 className="testimonials_header">Testimonials</h1>
      <div className="grid">
        <div className="testimonials_container">
          <Testimonial
            img={person1}
            rating={"5"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos velit accusantium consequuntur minima minus reprehenderit, porro odit voluptatibus optio vitae nobis maxime dicta maiores recusandae ad delectus et animi!"
            }
          />
          <Testimonial
            img={person2}
            rating={"5"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos velit accusantium consequuntur minima minus reprehenderit, porro odit voluptatibus optio vitae nobis maxime dicta maiores recusandae ad delectus et animi!"
            }
          />
          <Testimonial
            img={person3}
            rating={"5"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos velit accusantium consequuntur minima minus reprehenderit, porro odit voluptatibus optio vitae nobis maxime dicta maiores recusandae ad delectus et animi!"
            }
          />
          <Testimonial
            img={person4}
            rating={"5"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos velit accusantium consequuntur minima minus reprehenderit, porro odit voluptatibus optio vitae nobis maxime dicta maiores recusandae ad delectus et animi!"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
