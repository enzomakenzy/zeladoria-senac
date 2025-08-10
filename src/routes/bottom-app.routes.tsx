import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { CleanRooms } from "@screens/CleanRooms";
import { Profile } from "@screens/Profile";
import { useTheme } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type BottomAppProps = {
  home: undefined;
  cleanRooms: undefined;
  profile: undefined;
}

const { Navigator, Screen } = createBottomTabNavigator<BottomAppProps>(); 

export function BottomAppRoutes() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.COLORS.BLUE,
          borderTopWidth: 0,
          height: 62 + insets.bottom
        },
        tabBarButton: (props: any) => (
          <TouchableOpacity 
            {...props}
            style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}
            activeOpacity={1}
          />
        )
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