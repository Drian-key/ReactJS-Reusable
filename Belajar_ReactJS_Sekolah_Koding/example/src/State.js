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

// STATE
class Timer extends Component {
  constructor(props) {
    super(props); // Berfungsi supaya props dapat di akses di constructor
    this.state = {
      time: props.start,
    };
  }

  // Lifecycle
  componentDidMount() {
    // Jika Anda harus berinteraksi dengan browser
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    // Metode berikut dipanggil saat komponen sedang dihapus dari DOM
    clearInterval(this.addInterval);
  }

  increase() {
    // Update status time setiap detik
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1,
    }));
  }

  render() {
    return <div>{this.state.time} Detik</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer start="0" />
        </header>
      </div>
    );
  }
}

export default App;
