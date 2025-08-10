import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { CleanRooms } from "@screens/CleanRooms";
import { Profile } from "@screens/Profile";

type BottomAppProps = {
  home: undefined;
  cleanRooms: undefined;
  profile: undefined;
}

const { Navigator, Screen } = createBottomTabNavigator<BottomAppProps>(); 

export function BottomAppRoutes() {
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
        name="cleanRooms"
        component={CleanRooms}
      />

      <Screen 
        name="profile"
        component={Profile}
      />
    </Navigator>
  )
}