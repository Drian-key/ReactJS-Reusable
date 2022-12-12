import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <h1>Belajar React Router Dom</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="profile">Profile</Link> | <Link to="about">About</Link>
      </nav>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default Navigation;
