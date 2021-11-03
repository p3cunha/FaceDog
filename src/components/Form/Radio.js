import React from "react";

function Radio({ options, value, setValue }) {
    return (
        <>
            {options.map((option) => (
                <label key={option} style={{ textTransform: 'capitalize' }}>
                    <input type="radio" value={option} checked={value === option}
                        onChange={({ target: { value } }) => setValue(value)}
                    />
                    {option}
                </label>
            ))}
        </>
    );
}

export default Radio;
