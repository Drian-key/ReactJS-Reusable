import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: "",
      items: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // mencegah reload page
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      // cara di atas merupakan cara untuk push data ke array
      // ...this.state.items <-- data sebelumnya
      // , this.state.todoItem <-- data yang baru
      todoItem: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange} />
          <button>Add</button>
        </form>

        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
