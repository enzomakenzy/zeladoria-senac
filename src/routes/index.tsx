import { NavigationContainer } from "@react-navigation/native";
import { BottomAppRoutes } from "./bottom-app.routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useEffect } from "react";
import * as NavigationBar from 'expo-navigation-bar';
import { useAuth } from "@hooks/useAuth";

export function Routes() {
  const { user } = useAuth();

  console.log("Usuário Logado => ", user);

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