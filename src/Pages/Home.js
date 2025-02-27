import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import ChooseFrsociety from "../Components/ChooseFrsociety";
import Reviews from "../Components/Reviews";
import Mission from "../Components/Mission";
import OurWorks2 from "../Components/OurWorks2";
import Donate from "../Components/Donate";
import Footer from "../Components/Footer";


function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Mission />
      <About />
      <ChooseFrsociety />
      <OurWorks2 />
      <Donate />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;
