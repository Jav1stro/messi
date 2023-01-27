import { useRef, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Box, Button } from "@mui/material";
import UserInfo from "../userInfo";

// redux
import { setUser } from "../../redux/slices/user/userSlice";
import { useDispatch } from "react-redux";

const LoginPageComponent = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({
    active: null,
    text: "",
  });
  const emailField = useRef(null);
  const passwordField = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        const users = response.data;
        const userToLog = users.find(
          (user) => user.email === emailField.current.value
        );

        console.log("users", users);
        if (emailField.current.value) {
          if (userToLog) {
            if (userToLog.password === passwordField.current.value) {
              console.log("adentro!");
              setErrors({
                active: false,
                text: "",
              });
              // setear usuario
              dispatch(
                setUser({
                  id: userToLog.id,
                  fullName: userToLog.fullName,
                  email: userToLog.email,
                  password: userToLog.password,
                  age: userToLog.age,
                })
              );
              router.push('/dashboard')
            } else {
              console.log("Password incorrecto");
              setErrors({
                active: true,
                text: "Password incorrecto",
              });
            }
          } else {
            console.log("No existe el usuario.");
            setErrors({
              active: true,
              text: "No existe el usuario.",
            });
          }
        } else {
          setErrors({
            active: true,
            text: "Escribi algo.",
          });
        }
      })
      .catch((e) => {
        console.log("errrrror", e);
        router.push('/404')
      });
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Box sx={{ position: "absolute", top: "10px", left: "10px" }}>
        <UserInfo />
      </Box>
      <Box
        action=""
        style={{
          margin: " 150px auto",
          padding: "30px",
          width: "300px",
          textAlign: "left",
          backgroundColor: "rgba(255,255,255,0.3)",
          borderRadius:'5px'
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>Login</h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "40px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <label htmlFor="">Email address</label>
            <input
              type="email"
              style={{ padding: "5px", marginTop: "10px" }}
              ref={emailField}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <label htmlFor="">Password</label>
            <input
              type="password"
              style={{ padding: "5px", marginTop: "10px" }}
              ref={passwordField}
            />
          </div>
          {errors.active && <p style={{textAlign:'center', color:'#de5858da'}}>{errors.text}</p>}
          <Button
            variant="outlined"
            type="submit"
            sx={{
              backgroundColor: "rgba(255,255,255,0.5)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,1)",
              },
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPageComponent;
