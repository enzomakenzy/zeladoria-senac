import { NavigationContainer } from "@react-navigation/native";
import { BottomAppRoutes } from "./bottom-app.routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useEffect } from "react";
import * as NavigationBar from 'expo-navigation-bar';

export function Routes() {
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