import "./App.css";
import { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Halaman Home</h2>;
}

function ListView() {
  return <h2>Halaman Users</h2>;
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li>
              <Link to="/">Home</Link>
              <p>tes</p>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </nav>

          <main>
            <Route path="/" exact component="{Home}" />
            <Route path="/user" exact component="{ListView}" />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
