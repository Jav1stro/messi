import Head from "next/head";
import Link from "next/link";
import Box from "@mui/material/Box";
import Page from "../../compoments/Page";
import Goles from "../../compoments/goles/index.js";
import UserInfo from "../../compoments/userInfo/index.js";
import Layout from "../../layouts/layout.js";
import Drawer from '../../compoments/drawer'

const MessiPage = () => {
  return (
    <Page title="Messi">
      <Box
        sx={{
          background: "url(/assets/messibg2.jpg) center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", top: "7px", right: "10px" }}>
          <UserInfo />
        </Box>
        <Drawer />
        <Box sx={{ position: "absolute", top: "100px", left: "20px" }}>
          <Goles />
        </Box>
      </Box>
    </Page>
  );
};

export default MessiPage;
