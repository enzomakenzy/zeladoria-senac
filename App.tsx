import { Login } from "@screens/Login";

import MainTheme from "src/theme/MainTheme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Login />
    </ThemeProvider>
  );
}
