import Box from "@mui/material/Box";
export default function MessiLayout({ children }) {
  return (
    <>
      <main>
        <Box
          sx={{ position: "absolute", top: "10px", left: "10px", zIndex: "10" }}
        >
          <h1>HOLA MESSI</h1>
        </Box>
        {children}
      </main>
    </>
  );
}
