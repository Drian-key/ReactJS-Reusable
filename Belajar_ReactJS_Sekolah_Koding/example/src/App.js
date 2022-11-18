import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

// Component - Properties

// function Age(props) {
//   return <span>umurnya {props.age}</span>;
// }

// function Greeting(props) {
//   return (
//     <h1>
//       Hallo {props.name} - <Age age={props.age} />
//     </h1>
//   );
// }

// Penggunaan event dengan function
// function Clicker() {
//   function handleClick(e) {
//     alert("success");
//     e.preventDefault();
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       Klik bro
//     </a>
//   );
// }

// penggunaan event dengan class
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      toggleStatus: !state.toggleStatus,
    }));
  }

  // render hasil
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggleStatus ? "ON" : "OFF"}</button>
        <p>kodisi sekarang {this.state.toggleStatus ? "Menyala" : "Mati"}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Toggle />
        </header>
      </div>
    );
  }
}

export default App;
