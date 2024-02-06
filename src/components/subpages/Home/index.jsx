import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Works from "./sections/Works";
import Contact from "./sections/Contact";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Works></Works>
      <Contact></Contact>
    </div>
  );
};

export default Home;
