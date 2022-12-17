import React from "react";
import UserAutentication from "../components/UserAutentication";
import { UserProvider } from "./context/User";

function Home(props) {
  return (
    <div className="container">
      <UserProvider>
        <p>
          My name is: <UserAutentication />
        </p>
      </UserProvider>
    </div>
  );
}

export default Home;
