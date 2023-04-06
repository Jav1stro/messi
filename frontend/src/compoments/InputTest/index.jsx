import { useState } from "react";
import styles from "./styles.module.css";
import theme from "../../theme";
import { Alert } from "../../compoments/Alert/Alert";
const InputTest = ({
  type,
  name,
  register,
  placeholder,
  errors,
  value,
  id,
}) => {
  // TIPO FILE
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState("");


const handleFile = (e)=>{
    console.log('filechange')
}

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const maxSize = 5 * 1024 * 1024; // 5MB en bytes
    setSelectedFile(file);
    setUploadProgress(0);
    if (file) {
        console.log('file')
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setUploading("uploaded");
            return 0;
          }
          if (prevProgress >= 30) {
            if (file && file.size >= maxSize) {
              clearInterval(interval);
              setUploading("error");
              return 0;
            }
          }
          return prevProgress + 10;
        });
      }, 100);
    }
  };

  const deleteFile = () => {
    setSelectedFile(null);
  };
  // FIN TIPO FILE
  return (
    <>
      {type.includes("text") && (
        <div>
          <textarea
            className={styles.inputText}
            type="text"
            name={name}
            placeholder={placeholder}
            {...register(name, {
              required: "Required",
            })}
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
            <p> 30/300 caracteres</p>
          </div>

          {errors[name] && (
            <Alert
              type="danger"
              text={errors[name]?.message}
              width="50%"
              height="100px"
              margin="auto"
            />
          )}
        </div>
      )}

      {type.includes("int") && (
        <>
          <input
            className={styles.inputNumber}
            type="number"
            name={name}
            {...register(name, {
              required: "Required",
              maxLength: {
                value: 5,
                message: "Max length 5",
              },
            })}
          />
          <div
            style={{
              margin: "8px 0px 0px 24px",
              color: `${theme.colors.info}`,
              fontWeight: "normal",
              gap: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <p>Ingrese un número de hasta 5 dígitos.</p>
            <>
              {errors[name] ? (
                <>
                  <Alert
                    type="danger"
                    text={errors[name]?.message}
                    width="50%"
                    height="100px"
                    margin="auto"
                  />
                </>
              ) : (
                <></>
              )}
            </>
          </div>
        </>
      )}

      {type === "year" && (
        <>
          <input
            className={styles.inputNumber}
            type="number"
            name={name}
            {...register(name, {
              required: "Required",
              min: {
                value: 1880,
                message: "El valor minimo es 1880",
              },
              max: {
                value: 2022,
                message: "El valor maximo es 2022",
              },
            })}
          />
          <div
            style={{
              margin: "8px 0px 0px 24px",
              color: `${theme.colors.info}`,
              fontWeight: "normal",
              gap: "8px",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <p>Ingrese un año de 1880 a 2022</p>
            {errors[name] ? (
              <>
                <Alert
                  type="danger"
                  text={errors[name]?.message}
                  width="50%"
                  height="100px"
                  margin="auto"
                />
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      )}

      {type === "option" && (
        <>
          <label className={styles.divRadio} htmlFor={id}>
            <input
              id={id}
              type="radio"
              name={name}
              className={styles.inputRadio}
              {...register(name, { required: "required" })}
              value={value}
            />
            {value}
          </label>
          {errors[name] ? <>required!</> : <></>}
        </>
      )}

      {type === "optionmulti" && (
        <>
          <label className={styles.divRadio} htmlFor={id}>
            <input
              id={id}
              type="checkbox"
              name={name}
              className={styles.inputRadio}
              {...register(name, { required: "required" })}
              value={value}
            />
            {value}
          </label>
          {errors[name] ? <>required!</> : <></>}
        </>
      )}

      {type === "file" && (
        <div className={styles.divFile}>
          <button
            style={{
              color: "white",
              width: "204px",
              border: "none",
              fontSize: "16px",
              fontWeight: "bold",
              height: "48px",
              backgroundColor: `${theme.colors.link}`,
              borderRadius: "30px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Subir archivo
            {/* <Icon name="CloudIcon" width="24px" height="16.8px" /> */}
            <input
              type="file"
              className={styles.inputFile}
              onChangeCapture={handleFileChange}
              accept=".pdf,.doc,.docx"
              {...register(name, {
                required: "Required",
              })}
            
            />
          </button>
          <p style={{ fontSize: "13.6px", marginTop: "8px" }}>
            JPG, PNG, o PDF (hasta 5MB)
          </p>

          {selectedFile && (
            <div className={styles.fileUploadedContainer}>
              <div
                className={styles.fileUploadedDiv}
                style={{
                  border:
                    uploading === "error"
                      ? `3px solid ${theme.colors.danger}`
                      : `1px solid ${theme.colors.verdeCemento}`,
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "48px",
                    backgroundColor: `${theme.colors.verdeAzulado}`,
                    padding: "12px",
                  }}
                >
                  {/* <Icon name="DocumentIcon" width="24px" height="24px" /> */}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minWidth: "300px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      color: `${theme.colors.black}`,
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {selectedFile.name}
                  </p>
                  {uploading === "error" && (
                    <>
                      <progress
                        value="100"
                        max="100"
                        className={styles.progressError}
                      />
                      <p
                        style={{
                          fontSize: "13.6px",
                          color: `${theme.colors.black}`,
                          fontWeight: "normal",
                          marginTop: "10px",
                        }}
                      >
                        {(selectedFile.size / 1024 ** 2).toFixed(4)}mb • Error
                        de subida
                      </p>
                    </>
                  )}
                  {uploading === "uploading" && (
                    <>
                      <progress
                        value={uploadProgress}
                        max="100"
                        className={styles.progressUploading}
                      />
                      <p
                        style={{
                          fontSize: "13.6px",
                          color: `${theme.colors.black}`,
                          fontWeight: "normal",
                          marginTop: "10px",
                        }}
                      >
                        {(selectedFile.size / 1024 ** 2).toFixed(4)}mb •
                        Subiendo archivo...
                      </p>
                    </>
                  )}
                  {uploading === "uploaded" && selectedFile && (
                    <>
                      <progress
                        value="100"
                        max="100"
                        className={styles.progressUploading}
                      />
                      <p
                        style={{
                          fontSize: "13.6px",
                          color: `${theme.colors.black}`,
                          fontWeight: "normal",
                          marginTop: "10px",
                        }}
                      >
                        {(selectedFile.size / 1024 ** 2).toFixed(4)}mb • Archivo
                        subido correctamente
                      </p>
                    </>
                  )}
                </div>
                {/* <Icon
                  name="TrashIcon"
                  width="24px"
                  height="24px"
                  onClick={deleteFile}
                /> */}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default InputTest;
