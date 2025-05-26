{
  /*
import Products from './components/Products';
import Gift from './components/Gift';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products/>
      <Gift/>
      <Cards />
    </div>
  );
}

export default App;*/
}

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
