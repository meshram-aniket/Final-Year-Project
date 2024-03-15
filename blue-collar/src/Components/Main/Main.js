import React from "react";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";
import AnimatedWord from "./AnimatedWord/AnimatedWord";
import Reviews from "./Reviews/Reviews"
import "./Main.css";

export default function Main() {
  return (
    <>
      <div className="cursor-scale"></div>
      <Home />
      <Services />
      <AnimatedWord/>
      <Reviews/>
      <Footer />
    </>
  );
}