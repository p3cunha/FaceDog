import React from "react";

const Input = ({ label, id, name, value, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        {...props}
      />
    </>
  );
};

export default Input;
