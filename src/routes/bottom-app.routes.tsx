import { TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { CleanRooms } from "@screens/CleanRooms";
import { Profile } from "@screens/Profile";

import HomeIcon from "@assets/home.svg";
import CleanIcon from "@assets/clean.svg";
import ProfileIcon from "@assets/profile.svg";

import { useTheme } from "styled-components/native";

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
            onPress={(e) => {
              e.preventDefault?.(); // evita reload na web
              props.onPress?.(e); // se onPress existir, chama ele
            }}
            style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}
            activeOpacity={1}
          />
        )
      }}
    >
      <Screen 
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => <HomeIcon color={focused ? theme.COLORS.WHITE.TRANSPARENCE_100 : theme.COLORS.WHITE.TRANSPARENCE_70} />
        }}
      />

      <Screen 
        name="cleanRooms"
        component={CleanRooms}
        options={{
          tabBarIcon: ({ focused }) => <CleanIcon color={focused ? theme.COLORS.WHITE.TRANSPARENCE_100 : theme.COLORS.WHITE.TRANSPARENCE_70} />
        }}
      />

      <Screen 
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => <ProfileIcon color={focused ? theme.COLORS.WHITE.TRANSPARENCE_100 : theme.COLORS.WHITE.TRANSPARENCE_70} />
        }}
      />
    </Navigator>
  )
}