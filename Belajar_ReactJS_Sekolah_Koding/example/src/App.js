import logo from "./logo.svg";
import "./App.css";

// Component

function Greeting() {
  return <h1>Hallo Drian</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting />
      </header>
    </div>
  );
}

export default App;
