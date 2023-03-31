import { useState } from "react";
import FormLayout from "../../layouts/form";
import Page from "../../compoments/Page";
import { Typography, Box } from "@mui/material";
import Form from "../../compoments/form";

const FormPage = () => {
  return (
    <Page title="Form">
      {/* <FormLayout> */}
        {/* <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "75px",
          }}
        > */}
          <Form />
        {/* </Box> */}
      {/* </FormLayout> */}
    </Page>
  );
};

export default FormPage;
