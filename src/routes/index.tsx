import { NavigationContainer } from "@react-navigation/native";
import { BottomAppRoutes } from "./bottom-app.routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useEffect } from "react";
import * as NavigationBar from 'expo-navigation-bar';
import { useAuth } from "@hooks/useAuth";
import { Login } from "@screens/Login";

export function Routes() {
  const { user } = useAuth();

  useEffect(() => {
    NavigationBar.setButtonStyleAsync('light');
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {user.id ? <BottomAppRoutes /> : <Login />}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}