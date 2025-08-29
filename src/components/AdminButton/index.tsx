import { Button, ButtonText } from "./styles";

import { useTheme } from "styled-components/native";

import DoorConfigIcon from "@assets/door-edit.svg" ;
import DoorOpenIcon from "@assets/door-open.svg";

import { useNavigation } from "@react-navigation/native";
import { HomeStackProps } from "@routes/stacks/home-stack.routes";
import { HomeStackNavigationProps } from "@routes/stacks/home-stack.routes";
import { RoomDTO } from "@dtos/RoomDTO";

type Props = {
  name: string;
  screen: keyof HomeStackProps;
  icon: "edit" | "create";
  roomId?: RoomDTO;
}

export function AdminButton({ name, screen, icon, roomId }: Props) {
  const navigation = useNavigation<HomeStackNavigationProps>();

  const theme = useTheme();

  function handleGoToScreen(screen: keyof HomeStackProps, room: RoomDTO) {
    if (screen === "editRoom") {
      navigation.navigate(screen, {room: room});
    } else if (screen === "createRoom") {
      navigation.navigate(screen);
    }
  }

  return (
    <Button
      style={({ pressed }) => ({
        backgroundColor: pressed ? 
        theme.COLORS.ORANGE.PRESSED
        :
        theme.COLORS.ORANGE.MAIN
      })}
      onPress={() => handleGoToScreen(screen, roomId as RoomDTO)}
    >
      <ButtonText>{name}</ButtonText>
      
      {
        icon === "create" ?
        <DoorOpenIcon />
        :
        <DoorConfigIcon />
      }
      
    </Button>
  )
}