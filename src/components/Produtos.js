import React from "react";
import { ProductsContext } from "../Contexts/ProductsContext";
import Produto from "./Produto";
import Titulo from "./Titulo";

const Produtos = () => {
  const context = React.useContext(ProductsContext);
  return (
    <div>
      <Titulo texto="Produtos" />
      {context.products?.map((produto, i) => (
        <Produto key={produto.nome + i} {...produto} />
      ))}

      <button
        onClick={
          context.products
            ? context.cleanProducts
            : context.handleReload
        }
      >
        {context.products ? "Limpar produtos" : "Carregar Produtos"}
      </button>
    </div>
  );
};

export default Produtos;
