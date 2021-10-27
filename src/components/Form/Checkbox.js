import React from "react";

function Checkbox({ options, value, setValue }) {

    function handleChange({ target }) {
        target.checked
            ? setValue([...value, target.value])
            : setValue(value.filter((option) => option !== target.value));
    }

    const handleChecked = (option) => value.includes(option);

    return (
        <>
            {options.map((option) => (
                <label key={option} style={{ textTransform: "capitalize" }}>
                    <input
                        type="checkbox"
                        value={option}
                        checked={handleChecked(option)}
                        onChange={handleChange}
                    />
                    {option}
                </label>
            ))}
        </>
    );
}

export default Checkbox;
