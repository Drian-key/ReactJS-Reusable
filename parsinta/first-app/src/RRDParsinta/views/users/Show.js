import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Show(props) {
  let { identifier } = useParams();

  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const res = await (await fetch(`https://jsonplaceholder.typicode.com/users/${identifier}`)).json();
      setUser(res);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, [identifier]);

  console.log(user);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">{user.name}</div>
        <div className="card-body">
          <div>{user.username}</div>
          <div>{user.website}</div>
          <div>{user.phone}</div>
          <div>{user.email}</div>
        </div>
      </div>
    </div>
  );
}

export default Show;
