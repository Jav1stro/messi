import React from "react";
import { Typography, Box } from "@mui/material";

const comidas = [
  {
    comida: "Arroz integral",
    cantidad: 100,
    carbs: 24,
  },
  {
    comida: "Arroz blanco",
    cantidad: 100,
    carbs: 28,
  },
  {
    comida: "Avena",
    cantidad: 100,
    carbs: 57,
  },
  {
    comida: "Azucar",
    cantidad: 100,
    carbs: 100,
  },
  {
    comida: "Mani",
    cantidad: 100,
    carbs: 13,
  },
];
const FormCarbs = () => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "fit-content",
        backgroundColor: "rgba(255,255,255,0.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        border: "2px solid red",
      }}
    >
      {comidas.map((food) => {
        return (
          <Box>
            <Typography>{food.comida}</Typography>
            <Typography>{food.carbs}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default FormCarbs;
