import React from 'react';
import { useContext } from 'react';
import { authContext } from '../components/context/ProvideContext';

//this function is creating the hook that grabs the context
export function useAuth() {
  //useContext comes from react

  //useContext is a function that uses the state data from createContext
  const context = useContext(authContext);

  if (context === undefined) {
    throw new error('Incorrect authorization');
  }
  return context;
}
