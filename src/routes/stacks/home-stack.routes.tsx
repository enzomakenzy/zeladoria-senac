import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { CreateRoom } from "@screens/CreateRoom";
import { EditRoom } from "@screens/EditRoom";
import { Home } from "@screens/Home";
import { Login } from "@screens/Login";
import { RoomDetails } from "@screens/RoomDetails";

export type HomeStackProps = {
  login: undefined;
  home: undefined;
  roomDetails: undefined;
  createRoom: undefined;
  editRoom: undefined;
}

export type HomeStackNavigationProps = NativeStackNavigationProp<HomeStackProps>; 

const { Navigator, Screen } = createNativeStackNavigator<HomeStackProps>();

export function HomeStackRoutes() {
  return (
    <Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="login"
        component={Login}
      />

      <Screen 
        name="roomDetails"
        component={RoomDetails}
      />

      <Screen 
        name="createRoom"
        component={CreateRoom}
      />

      <Screen 
        name="editRoom"
        component={EditRoom}
      />
    </Navigator>
  )
}