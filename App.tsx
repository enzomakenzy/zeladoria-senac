import { Login } from "@screens/Login";

import MainTheme from "@themes/MainTheme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Login />
    </ThemeProvider>
  );
}
