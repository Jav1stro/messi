import UserInfo from "../../compoments/userInfo";
import Box from "@mui/material/Box";


const MainLayout =({ children }) => {
  console.log('asdasdas')
  return (
    <Box sx={{minHeight:'100vh'}}>
        <UserInfo />
        {children}
    </Box>
  );
}
export default MainLayout
