import { useContext, createContext, useState } from 'react';

const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    <EntryContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntryContext.Provider>
  );
};

const useEntries = () => {
  const context = useContext(EntryContext);

  if (context === undefined) {
    throw new Error('Invalid placement');
  }
  return context;
};

export { EntryProvider, useEntries };
