import React from "react";
import crew1 from "../../media/Mario and Adrian A.jpg";
import crew2 from "../../media/Mario and Adrian b.jpg";

function About() {
  return (
    <div className="grid">
      <div className="about">
        <div className="about_text">
          <div className="about_text-heading">
            <h1 className="about_text-heading-1">Little Lemon</h1>
            <h3 className="about_text-heading-3">Chicago</h3>
          </div>
          <div className="about_text-par">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            vel, quae libero laudantium officiis ullam temporibus quibusdam hic.
            Laborum illum debitis commodi consectetur qui quidem animi
            cupiditate voluptatem soluta placeat, repellat odio. Aliquid, ea.
            Laboriosam sint recusandae harum accusantium ex! Quos inventore
            totam explicabo tenetur, voluptas vitae dicta consequatur sint.
          </div>
        </div>
        <div className="about_pics">
          <img
            src={crew1}
            alt="crew members"
            className="about_pics-pic about_pics-pic-1"
          />
          <img
            src={crew2}
            alt="crew members"
            className="about_pics-pic about_pics-pic-2"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
