import React from "react";

const types = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: "CEP inválido",
    },
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Email inválido",
    },
};

function UseForm(type) {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(null);

    const validate = (value) => {
        if (!type) return true;
        if (value.length === 0) {
            setError("Preencha um valor");
            return false;
        } else if (!types[type]?.regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    };

    const onChange = ({ target: { value } }) => {
        if (error) validate(value);
        setValue(value);
    }

    return {
        value,
        error,
        setValue,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value),
    };
}

export default UseForm;
