import React from "react";
import { createBrowserRouter, Link } from "react-router-dom";

const App = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hai ini dari home</h1>
        <Link to="about">about</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
        <h1>Hi ini dari about</h1>
      </div>
    ),
  },
]);

export default App;
