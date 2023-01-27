import Box from "@mui/material/Box";
import UserInfo from "../../compoments/userInfo";
import Drawer from "../../compoments/drawer";

export default function CarbLayout({ children }) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url(/assets/dashboardBG.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
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
