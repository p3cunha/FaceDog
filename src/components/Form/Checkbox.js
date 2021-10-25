import React from "react";

function Checkbox() {
    const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];
    const [cores, setCores] = React.useState([]);

    function handleChange({ target }) {
        target.checked
            ? setCores([...cores, target.value])
            : setCores(cores.filter((cor) => cor !== target.value));
    }

    const handleChecked = (cor) => cores.includes(cor);

    return (
        <form>
            {coresArray.map((cor) => (
                <label key={cor} style={{ textTransform: "capitalize" }}>
                    <input
                        type="checkbox"
                        value={cor}
                        checked={handleChecked(cor)}
                        onChange={handleChange}
                    />
                    {cor}
                </label>
            ))}
            <ul>
                {cores.map((cor) => (
                    <li key={cor}>{cor}</li>
                ))}
            </ul>
        </form>
    );
}

export default Checkbox;
