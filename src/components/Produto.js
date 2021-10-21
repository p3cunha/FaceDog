import React from "react";
const formato = {
  minimumFractionDigits: 2,
  style: "currency",
  currency: "BRL",
};
const Produto = ({ nome, preco, fotos }) => {
  return (
    <div>
      <h1>{nome}</h1>
      <p>{Number(preco).toLocaleString("pt-BR", formato)}</p>
      <img src={fotos[0].src} alt={fotos[0].titulo} />
    </div>
  );
};

export default Produto;
