import UserInfo from "../../compoments/userInfo";
import Box from "@mui/material/Box";

const MainLayout = ({ children }) => {
  console.log("asdasdas");
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <h1>hola layout</h1>
      <UserInfo />
      {children}
    </Box>
  );
};
export default MainLayout;
