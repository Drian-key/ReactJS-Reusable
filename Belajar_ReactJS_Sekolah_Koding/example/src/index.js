import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Contoh penggunaan jsx secara langsung
// const name = "Drian Tcho";

// function greet() {
//   return "Hi " + name;
// }

// const element = <h1> {greet(name)}!! </h1>;

// const master = ReactDOM.createRoot(document.getElementById("master"));
// master.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
