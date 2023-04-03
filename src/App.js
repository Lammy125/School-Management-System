import "./App.css";
import AllRoute from "./route/AllRoutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "cursive",
        textTransform: "none",
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: 0.5,
        color: "#000000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AllRoute />
      </div>
    </ThemeProvider>
  );
}

export default App;
