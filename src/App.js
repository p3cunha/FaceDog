import React from "react";
import Produtos from "./components/Produtos";
import { ProductsContext, ProductsStorage } from "./Contexts/ProductsContext";
import useFetch from "./Hooks/UseFetch";
import useLocalStorage from "./Hooks/UseLocalStorage";

const App = () => {
  const { data: products, error, load, request } = useFetch();
  React.useEffect(() => {
    request("https://ranekapi.origamid.dev/json/api/produto/notebook");
  }, [request]);

  return (
    <React.Fragment>
      <ProductsStorage>
        {products?.map((product) => (
          <p>{product}</p>
        ))}
      </ProductsStorage>
    </React.Fragment>
  );
};

export default App;
