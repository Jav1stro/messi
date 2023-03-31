import Link from "next/link";
import { Box } from "@mui/material";
import styles from "../styles/index.module.css";
import Page from "../compoments/Page";
import UserInfo from "../compoments/userInfo";
import theme from "../theme";

// import Layout from "../layouts/layout";

export default function Home() {


  console.log("Home");
  return (
    <Page title="Home">
      <main
        style={{
          color: `${theme.colors.white}`,
          height: "50vh",
          boxShadow: `0px -46px 6px 0px ${theme.colors.blue} inset`,
          borderBottom: `1px solid ${theme.colors.blue}`,
          margin: "10% auto",
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "50px",
          padding: "25px 0",
          borderRadius: "8px",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "70px" }}>🐙</h2>
        <Link href="/auth/login">
          <div className={styles.btn1}>
            <span style={{ color: `${theme.colors.blue}` }}>Start</span>
          </div>
        </Link>
        <Box sx={{ position: "absolute", top: "10px", left: "10px" }}>
          <UserInfo />
        </Box>
      </main>
    </Page>
  );
}

// Home.getLayout = page => {
//   return <Layout variant='main'>{page}</Layout>;
// };
