import Head from "next/head";
import Link from "next/link";
import Box from "@mui/material/Box";
import Page from "../../compoments/Page";
import Goles from "../../compoments/goles/index.js";
import UserInfo from "../../compoments/userInfo/index.js";
import Layout from "../../layouts/layout.js";

const MessiPage = () => {
  return (
    <Page title ="Messi">
      
      <Box
        sx={{
          background: "url(/assets/messibg2.jpg) center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", top: "10px", right: "10px" }}>
          <UserInfo />
        </Box>
        <Link href="/">Home</Link>
        <Box sx={{ position: "absolute", top: "30px", left: "20px" }}>
          <Goles />
        </Box>
      </Box>
    </Page>
  );
};
MessiPage.getLayout = function getLayout(page) {
  return <Layout variant="messiPage">{page}</Layout>;
};
export default MessiPage;
