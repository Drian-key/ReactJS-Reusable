import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Tables from "./components/Tables";

function App() {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const res = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

    setUsers(res);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="py-4">
      <div className="container">
        <h4>The Users</h4>
        <hr />
        <div className="row">
          <Tables users={{ users }} />
        </div>
      </div>
    </div>
  );
}

export default App;
