import React from "react";

const Input = ({
  label,
  id,
  name,
  value,
  type,
  onBlur,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
