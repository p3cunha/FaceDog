import React from "react";
import useFetch from "../Hooks/UseFetch";
import useLocalStorage from "../Hooks/UseLocalStorage";

export const ProductsContext = React.createContext();

export const ProductsStorage = ({ children }) => {
  const { data: products, request } = useFetch();
  const [product, setProduct] = useLocalStorage("product", "pica puta");

  console.log("product in storage", product);

  return (
    <ProductsContext.Provider value={{ products, setProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
