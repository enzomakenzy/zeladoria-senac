import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { CreateUser } from "@screens/CreateUser";
import { Profile } from "@screens/Profile";
import { UsersList } from "@screens/UsersList";

type ProfileStackProps = {
  profile: undefined;
  createUser: undefined;
  usersList: undefined; 
}

export type ProfileStackNavigationProps = NativeStackNavigationProp<ProfileStackProps>;

const { Navigator, Screen } = createNativeStackNavigator<ProfileStackProps>();

export function ProfileStackRoutes() {
  return (
    <Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="profile"
        component={Profile}
      />

      <Screen 
        name="createUser"
        component={CreateUser}
      />

      <Screen 
        name="usersList"
        component={UsersList}
      />
    </Navigator>
  );
}