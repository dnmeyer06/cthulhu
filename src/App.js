import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import CharacterCreator from "./Pages/CharacterCreator.tsx";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/classic"
          element={<CharacterCreator method="classic" />}
        />
        <Route
          path="/pointbuy"
          element={<CharacterCreator method="pointbuy" />}
        />
      </Routes>
    </>
  );
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
