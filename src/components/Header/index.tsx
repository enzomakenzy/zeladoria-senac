import { Image } from "react-native";

import { HeaderContainer, NotificationButton } from "./styles";
import NotificationIcon from "@assets/notification.svg";

import SenacLogoImage from "@assets/senac-logo.png";
import { useTheme } from "styled-components/native";

export function Header() {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <Image 
        source={SenacLogoImage} 
        resizeMode="contain"
        style={{ width: 75, height: 48 }} 
      />

      <NotificationButton>
        <NotificationIcon fill={theme.COLORS.BLUE} />
      </NotificationButton>
    </HeaderContainer>
  )
}