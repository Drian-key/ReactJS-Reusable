import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
// createContext() adalah bawaan react

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    try {
      const res = await (await fetch("https://jsonplaceholder.typicode.com/users/9")).json();
      setUser(res);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return <UserContext.Provider value={{ user, loading }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
