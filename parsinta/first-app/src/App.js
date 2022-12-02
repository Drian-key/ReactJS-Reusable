import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: [],
    };
  }

  getUser = async () => {
    const response = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();

    this.setState({
      user: response,
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { user } = this.state;
    return (
      <>
        <div>Hello {user.name}</div>
        <div>Hello {user.username}</div>
      </>
    );
  }
}

export default App;
