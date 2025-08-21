import { Button, ButtonText } from "./styles";

import { useTheme } from "styled-components/native";

import DoorConfigIcon from "@assets/door-edit.svg" ;
import DoorOpenIcon from "@assets/door-open.svg";

import { useNavigation } from "@react-navigation/native";
import { HomeStackProps } from "@routes/stacks/home-stack.routes";
import { HomeStackNavigationProps } from "@routes/stacks/home-stack.routes";

type Props = {
  name: string;
  screen: keyof HomeStackProps;
  icon: "edit" | "create";
}

export function AdminButton({ name, screen, icon }: Props) {
  const navigation = useNavigation<HomeStackNavigationProps>();

  const theme = useTheme();

  function handleGoToScreen(screen: keyof HomeStackProps) {
    navigation.navigate(screen)
  }

  return (
    <Button
      style={({ pressed }) => ({
        backgroundColor: pressed ? 
        theme.COLORS.ORANGE.PRESSED
        :
        theme.COLORS.ORANGE.MAIN
      })}
      onPress={() => handleGoToScreen(screen)}
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