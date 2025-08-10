import { NavigationContainer } from "@react-navigation/native";
import { BottomAppRoutes } from "./bottom-app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <BottomAppRoutes />
    </NavigationContainer>
  )
}