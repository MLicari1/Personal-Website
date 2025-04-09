import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Hobbies from "./components/hobbies/hobbies";
import Family from "./components/family/family";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Family />
      <Hobbies />
    </div>
  );
}

export default App;
