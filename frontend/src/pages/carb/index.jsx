import { useState } from "react";
import CarbLayout from "../../layouts/carb";
import Page from "../../compoments/Page";
import { Typography, Box } from "@mui/material";
import FormCarbs from "../../compoments/carb/Form";

const CarbCounterPage = () => {
  return (
    <Page title="Carb Counter">
      <CarbLayout>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "75px",
          }}
        >
          <h1>Contador de carbohidratos</h1>

          <FormCarbs />
        </Box>
      </CarbLayout>
    </Page>
  );
};

export default CarbCounterPage;
