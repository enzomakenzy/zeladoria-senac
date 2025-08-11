import { Routes } from "@routes/index";

import MainTheme from "@themes/MainTheme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Routes />
    </ThemeProvider>
  );
}
