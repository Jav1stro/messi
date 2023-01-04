import LoginPageComponent from "../../compoments/auth/LoginPage";
import { Box } from "@mui/material";
import Page from '../../compoments/Page'

const LoginPage = () => {
  return (
    <Page title="Login">
        <LoginPageComponent />
    </Page>
  );
};

export default LoginPage;
