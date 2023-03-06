import React from "react";
import About from "../components/About/About";
import Info from "../components/Info/Info";
import Specials from "../components/Specials/Specials";
import Testimonials from "../components/Testimonials/Testimonials";
function HomePage() {
  return (
    <div>
      <Info />
      <Specials />
      <Testimonials />
      <About />
    </div>
  );
}

export default HomePage;
