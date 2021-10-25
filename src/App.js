import React from "react";
import { ProductsContext, ProductsStorage } from "./Contexts/ProductsContext";

const App = () => {
  const productsContext = React.useContext(ProductsContext);
  console.log(productsContext);
  return (
    <React.Fragment>
      <ProductsStorage>
        {productsContext?.products?.fotos?.map((product) => (
          <p key={product.titulo}>{product.titulo}</p>
        ))}
      </ProductsStorage>
    </React.Fragment>
  );
};

export default App;
