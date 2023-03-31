import Box from "@mui/material/Box";
import UserInfo from "../../compoments/userInfo";
import Drawer from "../../compoments/drawer";
import theme from '../../theme'


export default function DasboardLayout({ children }) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: `${theme.colors.white}`
      }}
    >
      <Drawer />
      <Box sx={{ position: "absolute", top: "0px", right: "10px" }}>
        <UserInfo />
      </Box>
      {children}
    </Box>
  );
}
