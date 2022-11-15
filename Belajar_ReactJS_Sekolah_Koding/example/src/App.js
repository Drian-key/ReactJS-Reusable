import logo from "./logo.svg";
import "./App.css";

// Component - Properties

function Age(props) {
  return <span>umurnya {props.age}</span>;
}

function Greeting(props) {
  return (
    <h1>
      Hallo {props.name} - <Age age={props.age} />
    </h1>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="Drian Tcho" age="17" />
        <Greeting name="Miko" age="20" />
      </header>
    </div>
  );
}

export default App;
