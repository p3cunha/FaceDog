import React from "react";

function Select({ options, value, setValue, optionDisabled }) {
  return (
    <select value={value} onChange={({ target: { value } }) => setValue(value)}>
      {optionDisabled && <option value="" disabled>Selecione</option>}
      {options.map((option, i) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
