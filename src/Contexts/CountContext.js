import React from "react";

export const CounterContext = React.createContext();

export const CounterStorage = ({ children }) => {
  const [count, setCount] = React.useState(0);

  const addOne = () => setCount((counter) => counter + 1);
  const addTwo = () => setCount((counter) => counter + 2);

  return (
    <CounterContext.Provider value={{ count, addOne, addTwo }}>
      {children}
    </CounterContext.Provider>
  );
};
