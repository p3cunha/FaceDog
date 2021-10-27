import React from "react";
import Checkbox from "./components/Form/Checkbox";
import Form from "./components/Form/Form";
import Input from "./components/Form/Input";
import Radio from "./components/Form/Radio";
import Select from "./components/Form/Select";

const App = () => {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um cep válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target: { value } }) {
    validateCep(value);
  }

  function handleChange({ target: { value } }) {
    if (error) validateCep(value);
    setCep(value);
  }
  return (
    <>
      <form>
        <Input
          label="CEP"
          id="cep"
          type="text"
          value={cep}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error && <p>{error}</p>}
        <button>Enviar</button>
      </form>
    </>
  );
};

export default App;
