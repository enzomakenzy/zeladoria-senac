import { Routes } from "@routes/index";

import MainTheme from "@themes/MainTheme";
import { ThemeProvider } from "styled-components/native";

import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_500Medium, Quicksand_400Regular } from "@expo-google-fonts/quicksand";
import { Loading } from "@components/Loading";
import { AuthContextProvider } from "@contexts/AuthController";
import Toast from "react-native-toast-message";

export default function App() {
  const [fontsLoaded] = useFonts({ Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_500Medium, Quicksand_400Regular });

  return (
    <ThemeProvider theme={MainTheme}>
      <AuthContextProvider>
        { fontsLoaded ? <Routes /> : <Loading /> }
        <Toast />
      </AuthContextProvider>
    </ThemeProvider>
  );
}
