// import { useState } from "react";
import Box from "@mui/material/Box";

// Accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Goles = () => {
  const initialGoles = [
    {
      id: 1,
      title: "Arabia Saudita",
      description: "Gol de penal, 🇦🇷 1-0",
      minute: "10",
    },
    {
      id: 2,
      title: "Mexico",
      description: "Control y bomba de afuera del area, 🇦🇷 1/0",
      minute: "65",
    },
    {
      id: 3,
      title: "Australia",
      description:
        "Jugada desde el lateral derecho hacia adentro. Otamendi se la deja servida. 🇦🇷 1-0",
      minute: "35",
    },
    {
      id:4,
      title:'Holanda',
      description:'Penal. 🇦🇷 2-0',
      minute:'73'
    },
    {
      id:5,
      title:'Croacia',
      description:'Penal. 🇦🇷 1-0',
      minute:'34'
    },
    {
      id:6,
      title:'Francia',
      description:'Penal. 🇦🇷 1-0',
      minute: '23'
    },
    {
      id:7,
      title:'Francia',
      description:'Bomba de Lautaro Martinez que Lionel termina de empujar. LOCURA. 🇦🇷 3-2',
      minute:'107'
    }
  ];
  // const [Goles, setGoles] = useState([]);

  //   setGoles(initialGoles);
  return (
    <Box
      sx={{
        width: "700px",
        textAlign: "center",
        height: "300px",
        margin: "auto",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          left: "15x",
        }}
      >
        <img
          src={"/assets/escudo.png"}
          width="50px"
          height="50px"
          alt="React Logo"
        />
      </Box>
      <Box sx={{
        padding:'30px'
      }}>Goles</Box>

      <Box
        sx={{
          marginTop: "10px",
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap',
          justifyContent:'center',
          gap:'40px',
          padding:' 0px 30px',

        }}
      >
        {initialGoles.map((regalo,i) => {
          return (
            <Accordion
              sx={{
                padding: "10px",
                margin: "10px",
                backgroundColor: "rgb(238,234,171,0.5)",
                border: "none",
                width:'140px'
              }}
              key={i}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: "rgb(144,197,243)",
                  borderRadius: "5px",
                  borderLeft: "1px solid rgb(181,162,150)",
                  borderRight: "1px solid rgb(181,162,150)",
                  borderTop: "1px solid rgb(181,162,150)",
                }}
              >
                <Typography>
                  {`${regalo.id}`}-{` ${regalo.title}`}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  borderRadius: "10px 10px 30px 30px",
                  border: "none",
                }}
              >
                <Typography>{regalo.description}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};

export default Goles;
