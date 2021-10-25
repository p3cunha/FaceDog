import React from "react";

function Select({ options, value, setValue, optionDisabled }) {
  return (
    <select value={value} onChange={({ target: { value } }) => setValue(value)}>
      {options.map((option, i) => (
        <option key={option} value={option} disabled={optionDisabled === i}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
