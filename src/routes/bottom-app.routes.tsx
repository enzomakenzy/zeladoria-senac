import { TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackRoutes } from "@routes/stacks/home-stack.routes";
import { ProfileStackRoutes } from "@routes/stacks/profile-stack.routes";
import { CleanRooms } from "@screens/CleanRooms";
import { Notifications } from "@screens/Notifications";

import HomeIcon from "@assets/home.svg";
import CleanIcon from "@assets/clean.svg";
import NotificationIcon from "@assets/notification.svg";
import ProfileIcon from "@assets/user.svg";

import { useTheme } from "styled-components/native";

import { TabIcon } from "@components/TabIcon";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "@hooks/useAuth";

type BottomAppProps = {
  homeStack: undefined;
  cleanRooms: undefined;
  notification: undefined;
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
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.COLORS.BLUE,
          borderTopWidth: 0,
          height: 54 + insets.bottom
        },
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
          tabBarIcon: ({ focused }) => <TabIcon Icon={HomeIcon} focused={focused} />
        }}
      />

      { user.is_superuser &&
        <Screen 
          name="cleanRooms"
          component={CleanRooms}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon Icon={CleanIcon} focused={focused} />
          }}
        />
      }

      <Screen 
        name="notification"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon Icon={NotificationIcon} focused={focused} />
        }}
      />

      <Screen 
        name="profileStack"
        component={ProfileStackRoutes}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon Icon={ProfileIcon} focused={focused} />
        }}
      />
    </Navigator>
  )
}