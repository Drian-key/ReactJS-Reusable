import React, { useContext } from "react";
import { UserContext } from "../views/context/User";

function UserAutentication(props) {
  const { user, loading } = useContext(UserContext);
  return <div>{loading ? <div>Loading...</div> : <div>{user.name}</div>}</div>;
}

export default UserAutentication;
