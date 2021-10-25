import React from "react";
import useFetch from "../../Hooks/UseFetch";

const formFields = [
    { label: "Nome", value: "nome", type: "text" },
    { label: "Email", value: "email", type: "email" },
    { label: "Senha", value: "senha", type: "password" },
    { label: "CEP", value: "cep", type: "text" },
    { label: "Rua", value: "rua", type: "text" },
    { label: "Número", value: "numero", type: "text" },
    { label: "Cidade", value: "cidade", type: "text" },
    { label: "Estado", value: "estado", type: "text" },
];

export default function Form() {
    const [form, setForm] = React.useState(
        formFields.reduce((acc, curr) => ({ ...acc, [curr.value]: "" }), {})
    );
    const { data, loading, error, request } = useFetch();
    const handleFormChange = ({ target: { id, value } }) =>
        setForm({ ...form, [id]: value });
    const handleSubmit = (event) => {
        event.preventDefault();
        request("https://ranekapi.origamid.dev/json/api/usuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                {formFields.map(({ value, label, type }) => (
                    <React.Fragment key={value}>
                        <label htmlFor={value}>{label}</label>
                        <input
                            id={value}
                            name={value}
                            type={type}
                            value={form[value]}
                            onChange={handleFormChange}
                        />
                    </React.Fragment>
                ))}
                {data && !loading && <p>Formulário enviado!</p>}
                {error && <p>{error}</p>}
                {loading && <p>Enviando requisição...</p>}
                <button>Enviar</button>
            </form>
        </React.Fragment>
    );
}
