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
import { useAuth } from "@hooks/useAuth";

type BottomAppProps = {
  homeStack: undefined;
  cleanRooms: undefined;
  profileStack: undefined;
}

const { Navigator, Screen } = createBottomTabNavigator<BottomAppProps>(); 

export function BottomAppRoutes() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { user } = useAuth();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.COLORS.BLUE,
          borderTopWidth: 0,
          height: 52 + insets.bottom
        },
        tabBarActiveTintColor: theme.COLORS.WHITE.TRANSPARENCE_100,
        tabBarInactiveTintColor: theme.COLORS.WHITE.TRANSPARENCE_70,
        tabBarLabelStyle: {
          marginTop: 1
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
          tabBarLabel: "Início",
          tabBarIcon: ({ focused }) => (
            <HomeIcon 
              height={25} 
              width={25} 
              fill={focused ? theme.COLORS.WHITE.TRANSPARENCE_100 : theme.COLORS.WHITE.TRANSPARENCE_70} 
            />
          )
        }}
      />

      { user.is_superuser &&
        <Screen 
          name="cleanRooms"
          component={CleanRooms}
          options={{
            tabBarLabel: "Salas limpas",
            tabBarIcon: ({ focused }) => (
              <CleanIcon 
                height={24} 
                width={24} 
                fill={focused ? theme.COLORS.WHITE.TRANSPARENCE_100 : theme.COLORS.WHITE.TRANSPARENCE_70} 
              />
            )
          }}
        />
      }

      <Screen 
        name="profileStack"
        component={ProfileStackRoutes}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused }) => (
            <ProfileIcon 
              height={30} 
              width={30} 
              fill={focused ? theme.COLORS.WHITE.TRANSPARENCE_100 : theme.COLORS.WHITE.TRANSPARENCE_70} 
            />
          )
        }}
      />
    </Navigator>
  )
}