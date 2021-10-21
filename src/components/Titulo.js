import React from "react";
import { ProductsContext } from "../Contexts/ProductsContext";

const Titulo = ({ texto }) => {
  const context = React.useContext(ProductsContext);
  return <h2 style={{color: '#b98a09'}}>{context.products?.length}{" "}{texto}</h2>;
};

export default Titulo;
