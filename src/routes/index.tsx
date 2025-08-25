import { NavigationContainer } from "@react-navigation/native";
import { BottomAppRoutes } from "./bottom-app.routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useContext, useEffect } from "react";
import * as NavigationBar from 'expo-navigation-bar';
import { AuthContext } from "@contexts/AuthController";

export function Routes() {
  const contextData = useContext(AuthContext);

  console.log("Usuário Logado => ", contextData);

  useEffect(() => {
    NavigationBar.setButtonStyleAsync('light');
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomAppRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}