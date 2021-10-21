import React from "react";

const useLocalStorage = (key, initial) => {
  const [state, setState] = React.useState(
    () => localStorage.getItem(key) || initial
  );

  React.useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
