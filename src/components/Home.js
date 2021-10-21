import React from "react";
import Titulo from "./Titulo";

const Home = () => {
  const [count, setCount] = React.useState(0);
  const [items, setItems] = React.useState([]);

  const handleClick = () => {
      setCount(count + 1);
      setItems(items => [...items, `Item ${count + 1}`])
  };

  return (
    <div>
      <Titulo texto="Home" />
      <p>Esta é a home do site</p>
      <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      </ul>
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
};

export default Home;
