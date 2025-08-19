import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { RoomDetails } from "@screens/RoomDetails";

type HomeStackProps = {
  homeStack: undefined;
  roomDetails: undefined;
}

export type HomeStackNavigationProps = NativeStackNavigationProp<HomeStackProps>; 

const { Navigator, Screen } = createNativeStackNavigator<HomeStackProps>();

export function HomeStackRoutes() {
  return (
    <Navigator 
      screenOptions={{
        headerShown: false,
        animation: "none"
      }}>
      <Screen 
        name="homeStack"
        component={Home}
      />

      <Screen 
        name="roomDetails"
        component={RoomDetails}
      />
    </Navigator>
  )
}