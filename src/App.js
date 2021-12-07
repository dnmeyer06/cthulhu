import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import CharacterCreator from "./CharacterCreator.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/classic" element={<CharacterCreator method="classic" />} />
      <Route
        path="/pointbuy"
        element={<CharacterCreator method="pointbuy" />}
      />
    </Routes>
  );
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
