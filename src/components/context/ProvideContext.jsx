import React from 'react';
import { useState, createContext } from 'react';

//create context is a function.
//create context is a function that can pass global state/data.
export const authContext = createContext();

export default function ProvideContext({ children }) {
  const [users, setUsers] = useState(null);

  const login = (userName, password) => {
    const loginSuccess =
      userName === process.env.AUTH_USERNAME &&
      password === process.env.AUTH_PASSWORD;

    if (loginSuccess) setUsers({ userName });
    return loginSuccess;
  };

  const logout = (callback) => {
    setUsers(null);
    callback();
  };

  return (
    //this tells it what to pass down to anything that is wrapped inside it.
    <authContext.Provider value={{ users, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
