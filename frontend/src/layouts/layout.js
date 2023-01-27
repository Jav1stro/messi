import MainLayout from "./main";

export default function Layout({ children }) {
  console.log("Layout");
  return <MainLayout>{children}</MainLayout>;
}
