import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gift from "./components/Gift";
import Cards from "./components/Cards";
import Products from './components/Products';
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gift />
      <Cards />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
