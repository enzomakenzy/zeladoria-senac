import { TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackRoutes } from "@routes/stacks/home-stack.routes";
import { ProfileStackRoutes } from "@routes/stacks/profile-stack.routes";
import { CleanRooms } from "@screens/CleanRooms";
import { Notifications } from "@screens/Notifications";

import HomeIcon from "@assets/house-light.svg";
import HomeFocusedIcon from "@assets/house-solid.svg";
import CleanIcon from "@assets/broom-light.svg";
import CleanFocusedIcon from "@assets/broom-solid.svg";
import NotificationIcon from "@assets/bell-light.svg";
import NotificationFocusedIcon from "@assets/bell-solid.svg";
import ProfileIcon from "@assets/user-light.svg";
import ProfileFocusedIcon from "@assets/user-solid.svg";

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
          tabBarIcon: ({ focused }) => <TabIcon Icon={HomeIcon} FocusedIcon={HomeFocusedIcon} focused={focused} />
        }}
      />

      { user.is_superuser &&
        <Screen 
          name="cleanRooms"
          component={CleanRooms}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon Icon={CleanIcon} FocusedIcon={CleanFocusedIcon} focused={focused} />
          }}
        />
      }

      <Screen 
        name="notification"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon Icon={NotificationIcon} FocusedIcon={NotificationFocusedIcon} focused={focused} />
        }}
      />

      <Screen 
        name="profileStack"
        component={ProfileStackRoutes}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon Icon={ProfileIcon} FocusedIcon={ProfileFocusedIcon} focused={focused} />
        }}
      />
    </Navigator>
  )
}