import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../views/About";
import Login from "../views/auth/Login";
import Contact from "../views/Contact";
import NotFound from "../views/errors/NotFound";
import Home from "../views/Home";
import UsersIndex from "../views/users/Index";
import UsersShow from "../views/users/Show";

function index(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar /> <Home />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Navbar /> <About />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <Contact />
          </>
        }
      />
      <Route
        path="/users"
        element={
          <>
            <Navbar />
            <UsersIndex />
          </>
        }
      />
      <Route
        path="/users/:identifier"
        element={
          <>
            <Navbar />
            <UsersShow />
          </>
        }
      />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default index;
