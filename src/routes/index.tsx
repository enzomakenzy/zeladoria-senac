import { NavigationContainer } from "@react-navigation/native";
import { BottomAppRoutes } from "./bottom-app.routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomAppRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}