import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedServices from "../components/FeaturedServices";
import AboutWAEC from "../components/AboutWaec";
import BuyChecker from "../components/BuyChecker";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedServices />
      <AboutWAEC />
      <BuyChecker />
      <Footer />
    </div>
  );
};

export default Home;
