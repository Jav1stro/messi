import { useState, useEffect } from "react";
// Components
import { Input } from "../inputCuestionario/index";
// Services
// Styles
import styles from "./styles.module.css";
import theme from "../../theme";

const data = [
  {
    id: 1,
    attributes: {
      item: "1",
      title: "Características generales de la organización",
      createdAt: "2023-02-28T13:26:33.270Z",
      updatedAt: "2023-03-14T14:06:34.868Z",
      publishedAt: "2023-02-28T13:29:18.004Z",
      question: [
        {
          id: 1,
          title:
            "¿Está expresamente contenida la igualdad de género en la misión, visión y valores de la organización?",
          type: "option",
          item: 1,
          subquestion: [],
          options: [
            {
              id: 30,
              order: 1,
              option: "Si",
            },
            {
              id: 31,
              order: 2,
              option: "No",
            },
            {
              id: 32,
              order: 3,
              option: "Ns-Nc",
            },
          ],
          altquestion: [
            {
              id: 1,
              tittle:
                "Adjuntar documentación correspodiente a misión, visión o valor de la organización",
              type: "file",
              visibleif: "Si",
            },
          ],
        },

        {
          id: 4,
          title: "¿Qué tipo de forma jurídica tiene la organización?",
          type: "option",
          item: 3,
          subquestion: [],
          options: [
            {
              id: 33,
              order: 1,
              option: "Empresa del Estado",
            },
            {
              id: 34,
              order: 2,
              option: "Sociedad del Estado",
            },
            {
              id: 35,
              order: 3,
              option: "Sociedad Anónima con participación estatal mayoritaria",
            },
          ],
          altquestion: [],
        },

        {
          id: 6,
          title:
            "Por favor, realice una breve descripción de los productos y/o servicios mas importantes que ofrece la organización. ",
          type: "text300",
          item: 5,
          subquestion: [],
          options: [],
          altquestion: [],
        },

        {
          id: 9,
          title:
            "¿La organización adhirió a algún compromiso/articulación que promueva la igualdad entre los géneros?",
          type: "optionmulti",
          item: 8,
          subquestion: [],
          options: [
            {
              id: 47,
              order: 1,
              option: "Ninguna",
            },
            {
              id: 48,
              order: 2,
              option: "Iniciativa Paridad de Género",
            },
            {
              id: 49,
              order: 3,
              option: "Global Impact",
            },
            {
              id: 50,
              order: 4,
              option: "Ganar-Ganar (ONU Mujeres - WEPS)",
            },
            {
              id: 51,
              order: 5,
              option: " Otras. ¿Cuál?: ",
            },
          ],
          altquestion: [
            {
              id: 2,
              tittle: "Adjuntar documentación respaldatoria",
              type: "file",
              visibleif: "Iniciativa Paridad de Género",
            },
            {
              id: 3,
              tittle: "Adjuntar documentación respaldatoria",
              type: "file",
              visibleif: "Global Impact",
            },
            {
              id: 4,
              tittle: "Adjuntar documentación respaldatoria",
              type: "file",
              visibleif: " Ganar-Ganar (ONU Mujeres - WEPS)",
            },
            {
              id: 5,
              tittle: "¿Cuál?.",
              type: "text300",
              visibleif: "Otras. ¿Cuál?: ",
            },
          ],
        },
      ],
    },
  },
];

export const Cuestionario = ({ btnMesagge }) => {
  const [datos, setDatos] = useState({});
  const [checkboxType, setCheckboxType] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [validations, setValidations] = useState(false);

  useEffect(() => {
    setQuestions(data[0].attributes.question);
    setDataState(data);
  }, []);

  const setDataState = (resp) => {
    const dataObject = Object.assign(
      {},
      ...resp.map((objeto) => {
        if (objeto.type === "optionmulti") {
          return;
        } else {
          return { [objeto.id]: "" };
        }
      })
    );
    setDatos(dataObject);

    const dataCheckboxObject = Object.assign(
      {},
      ...resp.map((objeto) => {
        if (objeto.type === "optionmulti") {
          return { [objeto.id]: [] };
        }
      })
    );
    setCheckboxType(dataCheckboxObject);
  };

  // handleChange no funciona para tipo checkbox
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setCheckboxType((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        [name]: checked
          ? [...prevSelectedOptions[name], value]
          : prevSelectedOptions[name].filter((option) => option !== value),
      }));
    } else {
      setDatos({ ...datos, [name]: value });
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();
    setValidations(true);
    const newDatos = { ...datos, optionmulti: checkboxType };
    console.log(`Respuestas del formulario del modulo ${id}`, newDatos);
  };
  return (
    <>
      <div style={{ width: "940px", margin: "34px auto" }}>
        <div
          style={{
            height: "fit-content",
            borderRadius: "30px",
            backgroundColor: "white",
            display: "flex",
          }}
        >
          <progress
            style={{ width: "900px", margin: "0 auto" }}
            max="100"
            value="10"
          ></progress>
        </div>
        <p
          style={{
            textAlign: "right",
            color: `${theme.colors.link}`,
            fontWeight: "bold",
            margin: "10px",
            fontSize: "20px",
          }}
        >
          Progreso total del bloque
        </p>
      </div>
      <div className={styles.container}>
        <form onSubmit={formSubmit} className={styles.form}>
          {questions.map((question, i) => {
            return (
              <div className={styles.questionContainer} key={i}>
                <div
                  style={{
                    color: "red",
                    position: "absolute",
                    right: "50px",
                    top: "40px",
                  }}
                >
                  *
                </div>
                <div className={styles.question} key={i}>
                  <label className={styles.questionTitle}>
                    {question.id}. {question.title}
                  </label>

                  {question.type.includes("text") && (
                    <Input
                      id={question.id}
                      type="text"
                      name={question.id}
                      onChangeInput={handleChange}
                      placeholder={question.title}
                      maxLength="300"
                    />
                  )}

                  {question.type === "option" && (
                    <fieldset style={{ border: "none" }}>
                      {question.options.map((option, i) => {
                        return (
                          <>
                            <Input
                              key={i}
                              type="radio"
                              name={question.id}
                              value={option.option}
                              onChangeInput={handleChange}
                            />
                          </>
                        );
                      })}
                    </fieldset>
                  )}

                  {question.type === "optionmulti" &&
                    question.options.map((option, i) => {
                      return (
                        <Input
                          type="optionmulti"
                          key={i}
                          name={question.id}
                          value={option.option}
                          onChangeInput={handleChange}
                        />
                      );
                    })}

                  {question.type === "year" && (
                    <>
                      <Input
                        id={question.id}
                        type="year"
                        name={question.id}
                        onChangeInput={handleChange}
                        maxLength="10"
                        validations={validations}
                      />
                    </>
                  )}
                  {question.type === "int5" && (
                    <>
                      <Input
                        id={question.id}
                        type="number"
                        name={question.id}
                        onChangeInput={handleChange}
                        maxLength="10"
                        validations={validations}
                      />
                    </>
                  )}
                </div>

                {question.altquestion.length && (
                  <>
                    {question.altquestion.map((quest) => {
                      return (
                        <div
                          style={{
                            width: "95%",
                            minHeight: "250px",
                            backgroundColor: "white",
                            borderRadius: "0 30px 30px 0",
                            marginTop: "10px",
                            marginLeft: "48px",
                            borderLeft: `solid 10px ${theme.colors.celesteArgentina}`,
                            paddingTop: "20px",
                          }}
                        >
                          <p className={styles.questionTitle}>
                            {quest.tittle}
                          </p>
                          <p style={{
                            color: 'rgb(51, 51, 51)',
                            maxWidth: '797px',
                            fontSize: '16px',
                            textAlign: 'left',
                            marginLeft: '24px',
                            marginBottom: '40px',
                            marginTop:'-20px',
                            fontWeight: '500',
                          }}>Bajada informativa</p>
                          <Input
                            id={quest.id}
                            type={quest.type}
                            name={quest.id}
                            onChangeInput={handleChange}
                            maxLength="10"
                            validations={validations}
                          />
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            );
          })}

          <div style={{ display: "flex", gap: "44px" }}>
            <button className={styles.btnCancel}>Cancelar y volver</button>
            <button className={styles.btnSubmit} type="submit">
              {btnMesagge}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Cuestionario;
