import React from 'react';
import { useState, createContext } from 'react';

//create context is a function.
//create context is a function that can pass global state/data.
export const authContext = createContext();

export default function ProvideContext({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const loginSuccess =
      username === process.env.AUTH_USERNAME &&
      password === process.env.AUTH_PASSWORD;

    if (loginSuccess) {
      setUser(username);
      console.log('hi', username);
    }
    return loginSuccess;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    //this tells it what to pass down to anything that is wrapped inside it.
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
