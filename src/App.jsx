import React from "react";
import "../src/App.css";
import Homepage from "./Component/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Pricing from "./Component/Pricing/Pricing";
import Support from "./Component/Support/Support";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="Qest/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/solutions" element={<Support />} />
      </Routes>
    </div>
  );
};

export default App;
