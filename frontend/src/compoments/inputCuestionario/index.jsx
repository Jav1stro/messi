import styles from "./styles.module.css";
import Icon from "../../assets/Icons";
import theme from "../../theme";

export const Input = ({
  type,
  value,
  name,
  onChangeInput,
  placeholder,
  maxLength,
  validations,
  id,
}) => {
  return (
    <>

    {type === 'file' &&(
      <div className={styles.divFile}>
        <input type="file" className={styles.inputFile}/>
      </div>
    )}
      {/* RADIO */}
      {type === "radio" && (
        <label className={styles.divRadio} htmlFor={id}>
          <input
            id={id}
            className={styles.inputRadio}
            type={type}
            name={name}
            onChange={onChangeInput}
            value={value}
          />
          {value}
        </label>
      )}
      {/* TEXT */}
      {type === "text" && (
        <>
          <textarea
            id={id}
            className={styles.inputText}
            type="text"
            name={name}
            onChange={onChangeInput}
            placeholder={placeholder}
            maxLength={maxLength}
          />
          <div
            style={{
              textAlign: "end",
              margin: "8px 60px 0px 0px",
              color: `${theme.colors.darkGrey}`,
              gap: "8px",
              display: "flex",
              justifyContent: "flex-end",

              alignItems: "center",
            }}
          >
            <Icon
              name="InfoIcon"
              width={"16"}
              height={"16"}
              color={`${theme.colors.darkGrey}`}
            />
            <p> 30/{maxLength} caracteres</p>
          </div>
        </>
      )}
      {/* NUMBER */}
      {type === "number" && (
        <>
          <input
            style={{
              marginLeft: "24px",
              width: "194px",
              height: "48px",
              borderRadius: "8px",
              border: validations
                ? `1px solid ${theme.colors.danger}`
                : `1px solid ${theme.colors.darkGrey}`,
              padding: "13px 12px",
            }}
            type="number"
            name={name}
            onChange={onChangeInput}
            maxLength={maxLength}
            id={id}
          />
          <div
            style={{
              margin: "8px 0px 0px 24px",
              color: validations
                ? `${theme.colors.danger}`
                : `${theme.colors.info}`,
              fontWeight: "normal",
              gap: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon
              name="InfoIcon"
              width={"16"}
              height={"16"}
              color={
                validations ? `${theme.colors.danger}` : `${theme.colors.info}`
              }
            />
            <p>Ingrese un número de hasta {maxLength} dígitos.</p>
          </div>
        </>
      )}
      {/* Year */}
      {type === "year" && (
        <>
          <input
            style={{
              marginLeft: "24px",
              width: "194px",
              height: "48px",
              borderRadius: "8px",
              border: validations
                ? `1px solid ${theme.colors.danger}`
                : `1px solid ${theme.colors.darkGrey}`,
              padding: "13px 12px",
            }}
            type="number"
            name={name}
            onChange={onChangeInput}
            maxLength={maxLength}
            id={id}
          />
          <div
            style={{
              margin: "8px 0px 0px 24px",
              color: validations
                ? `${theme.colors.danger}`
                : `${theme.colors.info}`,
              fontWeight: "normal",
              gap: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon
              name="InfoIcon"
              width={"16"}
              height={"16"}
              color={
                validations ? `${theme.colors.danger}` : `${theme.colors.info}`
              }
            />
            <p>Ingrese un año entre 1880 y 2022.</p>
          </div>
        </>
      )}

      {/* CHECKBOX */}
      {type === "optionmulti" && (
        <label className={styles.divRadio}>
          <input
            className={styles.inputCheckbox}
            type="checkbox"
            name={name}
            value={value}
            onChange={onChangeInput}
          />
          {value}
        </label>
      )}
      {/* SELECT */}
      {type === "select" && (
        <option value={value} className={styles.inputOption}>
          {value}
        </option>
      )}

    </>
  );
};
