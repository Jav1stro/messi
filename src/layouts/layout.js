import MainLayout from "./main";
import MessiLayout from "./messi";
import Box from "@mui/material/Box";

export default function Layout({ children }) {
  // if (variant === "main") {
  //   return <MainLayout>{children}</MainLayout>;
  // }
  // if (variant === "messiPage") {
  //   return <MessiLayout>{children}</MessiLayout>;
  // }
  console.log("Layout");
  return <MainLayout>{children}</MainLayout>;
}
