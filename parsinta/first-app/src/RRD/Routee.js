import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function Routee(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />}>
          <Route path=":username" element={<Profile />}>
            <Route path=":umur" element={<Profile />} />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Routee;
