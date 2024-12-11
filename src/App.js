import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PictureScroll from "./components/PictureScroll";
import CarShowcase from "./CarShowcase";
import CarView from "./components/CarView";
import EmiCalc from "./components/EmiCalc";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<CarShowcase />} />
        <Route path="/EmiCalc" element={<EmiCalc />} />

        <Route path="/CarView" element={<CarView />} />
      </Routes>
  );
};

export default App;
