import { Routes } from "@routes/index";

import MainTheme from "@themes/MainTheme";
import { ThemeProvider } from "styled-components/native";

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Loading } from "@components/Loading";
import { AuthContextProvider } from "@contexts/AuthController";

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold });

  return (
    <ThemeProvider theme={MainTheme}>
      <AuthContextProvider>
        { fontsLoaded ? <Routes /> : <Loading /> }
      </AuthContextProvider>
    </ThemeProvider>
  );
}
