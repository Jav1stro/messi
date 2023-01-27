import React from "react";
import Box from "@mui/material/Box";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import UserInfo from "../compoments/userInfo";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ position: "absolute", top: "10px", left: "10px" }}>
        <UserInfo />
      </Box>
      <h1>Error 404</h1>
      <ErrorOutlineIcon sx={{ width: "300px", height: "300px" }} />
    </Box>
  );
};

export default ErrorPage;
