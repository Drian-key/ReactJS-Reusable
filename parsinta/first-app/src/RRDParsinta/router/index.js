import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";

function index(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default index;
