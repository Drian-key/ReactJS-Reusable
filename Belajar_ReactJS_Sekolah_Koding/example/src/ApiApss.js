import "./App.css";
import { Component } from "react";

class App extends Component {
  // API
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
    };
  }

  // funsi ini akan di jalankan ketika component sudah siap
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ items: data, isLoading: false }));
  }

  render() {
    const { items, isLoading } = this.state;

    if (isLoading) {
      return <p>LOADING...</p>;
    }

    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name}tes</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
