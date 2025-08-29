import { RoomDTO } from "@dtos/RoomDTO";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { CreateRoom } from "@screens/CreateRoom";
import { EditRoom } from "@screens/EditRoom";
import { Home } from "@screens/Home";
import { RoomDetails } from "@screens/RoomDetails";

export type HomeStackProps = {
  home: undefined;
  roomDetails: {
    id: number;
  };
  createRoom: undefined;
  editRoom: {
    room: RoomDTO;
  }
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
        name="home"
        component={Home}
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