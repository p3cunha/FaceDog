import React from "react";
import Input from "./components/Form/Input";
import Select from "./components/Form/Select";

const App = () => {
  const [name, setName] = React.useState("");
  const [select, setSelect] = React.useState('')

  return (
    <>
    <Select options={['Selecione', 'Pedro', 'Carol']} value={select} setValue={setSelect} optionDisabled={0} />
    <Input label="Nome" id="name" name="name" value={name} setValue={setName} />
    </>
  )
};

export default App;
