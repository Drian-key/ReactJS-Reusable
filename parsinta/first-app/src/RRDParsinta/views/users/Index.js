import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Index(props) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let res = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
      setUsers(res);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {users.map((user, index) => {
          return (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                  <div className="mb-2">
                    <a href={`http://${user.website}`} target="_blank" className="d-block mb-2">
                      {user.website}
                    </a>
                    {user.username}
                  </div>
                  <NavLink to={`/users/${user.id}`} className="btn btn-primary">
                    View profile
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
