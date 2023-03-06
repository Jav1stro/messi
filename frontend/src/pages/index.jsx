import Link from "next/link";
import { Box } from "@mui/material";
import styles from "../styles/Home.module.css";
import Page from "../compoments/Page";
import UserInfo from "../compoments/userInfo";

// import Layout from "../layouts/layout";

export default function Home() {
  console.log("Home");
  return (
    <Page title="Home">
      <main className={styles.main}>
        <div className={styles.div}>
          <Link href="/auth/login">
            <div className={styles.btn1}>
              <span>Start</span>
            </div>
          </Link>
        </div>
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
