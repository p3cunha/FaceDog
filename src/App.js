import React from "react";
import Radio from "./components/Form/Radio";

const App = () => {
  const [page, setPage] = React.useState(0);
  const [questionPicked, setQuestionPicked] = React.useState(null);
  const [grade, setGrade] = React.useState(0);

  const nextPage = (event) => {
    event.preventDefault();
    if (page < perguntas.length) setPage(page + 1);
    if (questionPicked === perguntas[page].resposta) setGrade(grade + 1);
  };

  const questionsFinished = Boolean(page === perguntas.length);

  return (
    <>
      {!questionsFinished && (
        <form onSubmit={nextPage}>
          <fieldset
            style={{
              marginBottom: "1rem",
              padding: "2rem",
              border: "2px solid #eee",
            }}
          >
            <legend style={{ fontWeight: "bold" }}>
              {perguntas[page].pergunta}
            </legend>
            <div style={{ fontFamily: "monospace" }}>
              <Radio
                options={perguntas[page].options}
                value={questionPicked}
                setValue={setQuestionPicked}
              />
            </div>
          </fieldset>
          <button disabled={!perguntas[page].options.includes(questionPicked)}>
            Próxima
          </button>
        </form>
      )}
      {questionsFinished && (
        <div>
          Você acertou {grade} de {perguntas.length}!
        </div>
      )}
    </>
  );
};

export default App;

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];
