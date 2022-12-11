import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Tables from "./components/Tables";

function App() {
  const [user, setUser] = useState([]);
  const [identifier, setIdentifier] = useState(1);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    try {
      const res = await (await fetch(`https://jsonplaceholder.typicode.com/users/${identifier}`)).json();
      setUser(res);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(true);
    }
  };

  useEffect(() => {
    getUser();
  }, [identifier]);

  return (
    <div className="py-4">
      <div className="container">
        <h4>The Users</h4>
        <hr />
        <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
        <div className="row">
          <Tables users={{ user }} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
