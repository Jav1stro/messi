import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./styles.module.css";

const data = [
  {
    id: 1,
    title: "Preg1 text",
    type: "text",
    minLength: 4,
  },
  {
    id: 2,
    title: "Preg2 number",
    type: "number",
    minLength: 2,
  },
  {
    id: 3,
    title: "Preg3 radio",
    type: "radio",
    options: ["Si", "No", "Ns-Nc"],
    altquestion: [
      {
        title: "altquestionSi",
        id: 1,
        visibleIf: "Si",
        type: "text",
      },
      {
        title: "altquestionNo",
        id: 2,
        visibleIf: "No",
      },
    ],
  },
  {
    id: 4,
    title: "Preg4 checkbox",
    type: "checkbox",
    options: ["10", "20", "30", "40"],
    altquestion: [
      {
        title: "altquestion10",
        id: 1,
        visibleIf: "10",
      },
      {
        title: "altquestion20",
        id: 2,
        visibleIf: "20",
      },
      {
        title: "altquestion30",
        id: 3,
        visibleIf: "30",
      },
    ],
  },
  {
    id: 5,
    title: "Preg5 file",
    type: "file",
  },
  {
    id: 6,
    title: "Preg6 year",
    type: "year",
  },
];
export default function HookForm() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const [answers, setAnswers] = useState({});
  const onSubmit = (data) => {
    console.log("La data es: ", data);
    setAnswers(data);
  };

  const validateRadios = (value) => {
    if (!value || value.length === 0) {
      return "Selecciona al menos una opción";
    }
  };
  const validateCheckbox = (value) => {
    if (!value || value.length === 0) {
      return "Selecciona al menos una opción";
    }
  };

  const checkAltQuestion = (quest, altquest) => {
    const questionValue = watch(quest.title) || [];

    if (quest.type === "checkbox") {
      console.log("questionValue", questionValue);
      // si dentro de quesrtionValue esta el altquest.visibleIf tengo que devolver esa altquest

      if (questionValue.includes(altquest.visibleIf)) {
        console.log("entro");
        return <h3 key={altquest.id}>Si!/{altquest.title}</h3>;
      }
    } else {
      // console.log("Entra por NO ser tipo checkbox");
      if (altquest.visibleIf === questionValue) {
        console.log("entro");
        return <h3 key={altquest.id}>Si!/{altquest.title}</h3>;
      }
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {data.map((question, i) => {
        const questionTitle = question.title;
        return (
          <div key={i} className={styles.questionContainer}>
            <div className={styles.question} key={i}>
              <label className={styles.questionTitle}>
                {question.id} {question.title}
              </label>
              {question.type === "text" && (
                <>
                  <input
                    type={question.type}
                    className={styles.inputText}
                    minLength={question.minLength}
                    {...register(questionTitle, {
                      required: "This is required",
                      minLength: {
                        value: `${question.minLength}`,
                        message: `Min length is ${question.minLength}`,
                      },
                    })}
                  />
                  <p>{errors[questionTitle]?.message}</p>
                </>
              )}

              {question.type === "number" && (
                <>
                  <input
                    style={{
                      width: "25%",
                      marginLeft: "24px",
                      width: "194px",
                      height: "48px",
                      borderRadius: "8px",
                      border: errors[questionTitle]
                        ? `1px solid red`
                        : `1px solid blue`,
                      padding: "13px 12px",
                    }}
                    type={question.type}
                    minLength={question.minLength}
                    {...register(questionTitle, {
                      required: "This is required",
                      minLength: {
                        value: `${question.minLength}`,
                        message: `Min length is ${question.minLength}`,
                      },
                    })}
                  />
                  <p>{errors[questionTitle]?.message}</p>
                </>
              )}
              {question.type === "year" && (
                <>
                  <input
                    type={"number"}
                    minLength={question.minLength}
                    {...register(questionTitle, {
                      required: "This is required",
                      min: {
                        value: 1880,
                        message: `El min es 1880`,
                      },
                      max: {
                        value: 2022,
                        message: "El max es 2022",
                      },
                    })}
                  />
                  <p>{errors[questionTitle]?.message}</p>
                </>
              )}
              {question.type === "radio" && (
                <>
                  <fieldset
                    {...register(questionTitle, { validate: validateRadios })}
                  >
                    {question.options.map((option) => (
                      <div key={option}>
                        <input
                          type="radio"
                          id={option}
                          value={option}
                          {...register(questionTitle)}
                        />
                        <label htmlFor={option}>{option}</label>
                        <p>{errors[questionTitle]?.message}</p>
                      </div>
                    ))}
                  </fieldset>
                  {question.altquestion.map((altquest) => {
                    // if (altquest.visibleIf === altQuest) {
                    //   return (
                    //     <div key={altquest.id}>
                    //       <label>{altquest.title}</label>
                    //       <input
                    //         type={altquest.type}
                    //         {...register(altquest.title, {
                    //           required: "This is required",
                    //         })}
                    //       />
                    //       <p>{errors[questionTitle]?.message}</p>
                    //     </div>
                    //   );
                    // }
                    return checkAltQuestion(question, altquest);
                  })}
                </>
              )}
              {question.type === "checkbox" && (
                <>
                  <fieldset
                    {...register(questionTitle, {
                      validate: validateCheckbox,
                      required: "Please select at leassadt one",
                    })}
                  >
                    {question.options.map((option) => (
                      <div key={option}>
                        <input
                          type="checkbox"
                          id={option}
                          value={option}
                          {...register(questionTitle)}
                        />
                        <label htmlFor={option}>{option}</label>
                        <p>{errors[questionTitle]?.message}</p>
                      </div>
                    ))}
                  </fieldset>
                  {question.altquestion.map((altquest) => {
                    // if (altQuest2?.includes(altquest.visibleIf)) {
                    // if (getValues(questionTitle) == altquest.visibleIf) {
                    //   return (
                    //     <div key={altquest.id}>
                    //       <label>{altquest.title}</label>
                    //       <input
                    //         type={altquest.type}
                    //         {...register(altquest.title, {
                    //           required: "This is required",
                    //         })}
                    //       />
                    //       <p>{errors[questionTitle]?.message}</p>
                    //     </div>
                    //   );
                    // } else return;
                    return checkAltQuestion(question, altquest);
                  })}
                </>
              )}

              {question.type === "file" && (
                <>
                  <input
                    {...register(questionTitle, {
                      required: "This is required",
                    })}
                    type="file"
                  />
                  <p>{errors[questionTitle]?.message}</p>
                </>
              )}
            </div>
          </div>
        );
      })}
      <input type="submit" />
    </form>
  );
}
