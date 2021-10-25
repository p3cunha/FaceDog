import React from "react";
import useFetch from "../Hooks/UseFetch";
import useLocalStorage from "../Hooks/UseLocalStorage";

export const ProductsContext = React.createContext();

export const ProductsStorage = ({ children }) => {
  const [product, setProduct] = useLocalStorage("product", "loló");
  const { data: products, request } = useFetch();
  React.useEffect(() => {
    request("https://ranekapi.origamid.dev/json/api/produto/notebook");
  }, [request]);

  console.log("products", products);

  return (
    <ProductsContext.Provider value={{ products, setProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
