import { TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackRoutes } from "./stacks/home-stack.routes";
import { CleanRooms } from "@screens/CleanRooms";
import { ProfileStackRoutes } from "./stacks/profile-stack.routes";

import HomeIcon from "@assets/home.svg";
import CleanIcon from "@assets/clean.svg";
import ProfileIcon from "@assets/profile.svg";

import { useTheme } from "styled-components/native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

type BottomAppProps = {
  homeStack: undefined;
  cleanRooms: undefined;
  profileStack: undefined;
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
        name="homeStack"
        component={HomeStackRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon 
              height={30} 
              width={30} 
              fill={focused ? theme.COLORS.WHITE.TRANSPARENCE_100 : theme.COLORS.WHITE.TRANSPARENCE_70} 
            />
          )
        }}
      />

      <Screen 
        name="cleanRooms"
        component={CleanRooms}
        options={{
          tabBarIcon: ({ focused }) => (
            <CleanIcon 
              height={26} 
              width={26} 
              fill={focused ? theme.COLORS.WHITE.TRANSPARENCE_100 : theme.COLORS.WHITE.TRANSPARENCE_70} 
            />
          )
        }}
      />

      <Screen 
        name="profileStack"
        component={ProfileStackRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileIcon 
              height={34} 
              width={34} 
              fill={focused ? theme.COLORS.WHITE.TRANSPARENCE_100 : theme.COLORS.WHITE.TRANSPARENCE_70} 
            />
          )
        }}
      />
    </Navigator>
  )
}