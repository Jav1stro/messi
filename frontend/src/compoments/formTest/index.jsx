import { useState } from "react";
import { useForm } from "react-hook-form";
import InputTest from "../InputTest";
import theme from "../../theme";
import styles from "./styles.module.css";

const data = [
  {
    id: 1,
    item: 1,
    title:
      "¿Está expresamente contenida la igualdad de género en la misión, visión y valores de la organización?",
    type: "option",
    options: [
      { id: 144, order: 1, option: "Si", score: 0 },
      { id: 145, order: 2, option: "No", score: 0 },
      { id: 146, order: 3, option: "Ns-Nc", score: 0 },
    ],
    altquestion: [
      {
        id: 1,
        visibleif: "Si",
        tittle:
          "Adjuntar documentación correspodiente a misión, visión o valor de la organizacion",
        type: "file",
      },
    ],
  },
  {
    id: 6,
    item: 2,
    options: [],
    title: "¿En qué año se fundó la organización?",
    type: "year",
    altquestion: [],
  },
  {
    id: 7,
    item: 3,
    altquestion: [],
    title: "¿Qué tipo de forma jurídica tiene la organización?",
    type: "option",
    options: [
      { id: 13, order: 2, option: "Sociedad del Estado", score: 0 },
      {
        id: 14,
        order: 3,
        option: "Sociedad Anónima con participación estatal mayoritaria",
        score: 0,
      },
      { id: 15, order: 4, option: "Sociedad de economía mixta", score: 0 },
      { id: 16, order: 5, option: "Sociedad Anónima", score: 0 },
      {
        id: 17,
        order: 6,
        option: "Sociedad Responsabilidad limitada",
        score: 0,
      },

      {
        id: 18,
        order: 7,
        option: "Sociedad por acciones simplificadas",
        score: 0,
      },
      { id: 19, order: 8, option: "Cámara empresaria", score: 0 },
      { id: 20, order: 9, option: "Otra organización empresarial", score: 0 },

      { id: 147, order: 1, option: "Empresa del Estado", score: 0 },
    ],
  },
  {
    id: 9,
    item: 5,
    options: [],
    altquestion: [],
    title:
      "Por favor, realice una breve descripción de los productos y/o servicios mas importantes que ofrece la organización. ",
    type: "text300",
  },
  {
    id: 11,
    item: 7,
    title: "Cantidad de personas empleadas en la organización ",
    type: "int5",
    options: [],
    altquestion: [],
  },
  {
    id: 13,
    item: 9,
    title:
      "¿La organización adhirió a algún compromiso/articulación que promueva la igualdad entre los géneros?",
    type: "optionmulti",
    options: [
      { id: 150, order: 1, option: "NInguna", score: 0 },
      { id: 151, order: 2, option: "Iniciativa Paridad de Género", score: 0 },
      { id: 152, order: 3, option: "Global Impact", score: 0 },
      {
        id: 153,
        order: 4,
        option: "Ganar-Ganar (ONU Mujeres - WEPS)",
        score: 0,
      },
      { id: 154, order: 5, option: "Otras", score: 0 },
    ],
    altquestion: [
      {
        id: 3,
        visibleif: "Iniciativa Paridad de Género",
        tittle: "Adjuntar documentación respaldatoria",
        type: "file",
      },
      {
        id: 4,
        visibleif: "Global Impact",
        tittle: "Adjuntar documentación respaldatoria",
        type: "file",
      },
      {
        id: 5,
        visibleif: "Ganar-Ganar (ONU Mujeres - WEPS)",
        tittle: "Adjuntar documentación respaldatoria",
        type: "file",
      },
      { id: 6, visibleif: "Otras", tittle: "¿Cuál?", type: "text300" },
    ],
  },
  {
    id: 19,
    item: 10,
    options: [],
    altquestion: [],
    title: "Quien es el mejor jugador de boca? ",
    type: "text500",
  },
  {
    id: 16,
    item: 11,
    title:
      "¿La organización adhirió a algún compromiso/articulación que promueva la igualdad entre los géneros?",
    type: "optionmulti",
    options: [
      { id: 160, order: 1, option: "asd", score: 0 },
      { id: 161, order: 2, option: "dddd", score: 0 },
      { id: 162, order: 3, option: "bbb", score: 0 },
      {
        id: 163,
        order: 4,
        option: "Ganar-Ganar (ONU Mujeres - WEPS)",
        score: 0,
      },
      { id: 164, order: 5, option: "Otras", score: 0 },
    ],
    altquestion: [
      {
        id: 3,
        visibleif: "asd",
        tittle: "Adjuntar documentación respaldatoria",
        type: "file",
      },
      {
        id: 4,
        visibleif: "dddd",
        tittle: "Adjuntar documentación respaldatoria",
        type: "file",
      },
      {
        id: 5,
        visibleif: "bbb",
        tittle: "Adjuntar documentación respaldatoria",
        type: "file",
      },
      { id: 6, visibleif: "Otras", tittle: "¿Cuál?", type: "text300" },
    ],
  },
];

const FormTest = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [questions, setQuestions] = useState(data);
  const [answers, setAnswers] = useState({});

  const onSubmit = (data) => {
    console.log("La data es: ", data);
    setAnswers(data);
  };
  const checkAltQuestion = (quest, altquest) => {
    // questionValue no trae bien el valor
    const questName = quest.item;
    const questionValue = watch(questName) || [];

    const questionValueArray = questionValue[questName] || [];

    if (quest.type === "optionmulti") {
      if (questionValueArray.includes(altquest.visibleif)) {
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
            key={altquest.id}
          >
            <p className={styles.questionTitle}>{altquest.tittle}</p>
            <p
              style={{
                color: "rgb(51, 51, 51)",
                maxWidth: "550px",
                fontSize: "16px",
                textAlign: "left",
                marginLeft: "24px",
                marginBottom: "40px",
                marginTop: "-20px",
                fontWeight: "500",
              }}
            >
              {altquest.type === "excel" && (
                <>
                  Si no la tenés, podés descargarla desde el siguiente enlace:
                  <span
                    style={{
                      color: `${theme.colors.link}`,
                      cursor: "pointer",
                    }}
                  >
                    [descargar tabla]
                  </span>
                  . Una vez que la completes, subila.
                </>
              )}
              {altquest.type === "file" && <>Bajada informativa {altquest.id}</>}
            </p>
            <InputTest
              type={altquest.type}
              name={altquest.tittle}
              register={register}
              errors={errors}
            />
          </div>
        );
      }
    } else {
      // console.log("Entra por NO ser tipo checkbox");
      if (altquest.visibleif === questionValue[questName]) {
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
            key={altquest.id}
          >
            <p className={styles.questionTitle}>{altquest.tittle}</p>
            <p
              style={{
                color: "rgb(51, 51, 51)",
                maxWidth: "550px",
                fontSize: "16px",
                textAlign: "left",
                marginLeft: "24px",
                marginBottom: "40px",
                marginTop: "-20px",
                fontWeight: "500",
              }}
            >
              {altquest.type === "excel" && (
                <>
                  Si no la tenés, podés descargarla desde el siguiente enlace:
                  <span
                    style={{
                      color: `${theme.colors.link}`,
                      cursor: "pointer",
                    }}
                  >
                    [descargar tabla]
                  </span>
                  . Una vez que la completes, subila.
                </>
              )}
              {altquest.type === "file" && <>Bajada informativa</>}
            </p>
            <InputTest
              type={altquest.type}
              name={altquest.tittle}
              register={register}
              errors={errors}
            />
          </div>
        );
      }
    }
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
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {questions.length ? (
            <>
              {questions.map((question, i) => {
                const questionName = JSON.stringify(question.item);
                const questionType = question.type;
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
                        {question.id} {question.title}
                      </label>

                      {/* //////////
                      QUESTIONS
                      ///////////// */}

                      {question.type.includes("text") && (
                        <>
                          <InputTest
                            type={questionType}
                            placeholder={question.title}
                            name={questionName}
                            register={register}
                            errors={errors}
                          />
                        </>
                      )}

                      {question.type.includes("int") && (
                        <>
                          <InputTest
                            type={questionType}
                            placeholder={question.title}
                            name={questionName}
                            register={register}
                            errors={errors}
                          />
                        </>
                      )}

                      {question.type === "year" && (
                        <>
                          <InputTest
                            type={questionType}
                            placeholder={question.title}
                            name={questionName}
                            register={register}
                            errors={errors}
                          />
                        </>
                      )}

                      {question.type === "option" && (
                        <>
                          <fieldset
                            style={{
                              border: "none",
                            }}
                          >
                            {question.options.map((option, i) => (
                              <div key={i}>
                                <InputTest
                                  id={option.id}
                                  type={questionType}
                                  placeholder={question.title}
                                  name={questionName}
                                  register={register}
                                  errors={errors}
                                  value={option.option}
                                />
                              </div>
                            ))}
                          </fieldset>
                          {question.altquestion.map((altquest) => {
                            return checkAltQuestion(question, altquest);
                          })}
                        </>
                      )}

                      {question.type === "optionmulti" && (
                        <>
                          <fieldset
                            style={{
                              border: "none",
                            }}
                          >
                            {question.options.map((option, i) => (
                              <div key={i}>
                                <InputTest
                                  id={option.id}
                                  type={questionType}
                                  placeholder={question.title}
                                  name={questionName}
                                  register={register}
                                  errors={errors}
                                  value={option.option}
                                />
                              </div>
                            ))}
                          </fieldset>
                          {question.altquestion.map((altquest) => {
                            return checkAltQuestion(question, altquest);
                          })}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div className={styles.divSkeleton} key={n}></div>
              ))}
            </>
          )}

          <div style={{ display: "flex", gap: "44px" }}>
            <button className={styles.btnCancel}>Cancelar y volver</button>
            <button className={styles.btnSubmit} type="submit">
              Guardar y Continuar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormTest;
