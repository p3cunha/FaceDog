import React from "react";
import useFetch from "../Hooks/UseFetch";
import useLocalStorage from "../Hooks/UseLocalStorage";

export const ProductsContext = React.createContext();

export const ProductsStorage = ({ children }) => {
  // const { data: products, request } = useFetch();
 

  return (
    <ProductsContext.Provider >
      {children}
    </ProductsContext.Provider>
  );
};
