import React from "react";

import About from "../components/About/About";
import Specials from "../components/Specials/Specials";
import Testimonials from "../components/Testimonials/Testimonials";
function HomePage() {
  return (
    <div>
      <About />
      <Specials />
      <Testimonials />
    </div>
  );
}

export default HomePage;
