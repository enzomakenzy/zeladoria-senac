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
        style={{ width: 50, height: 38 }} 
      />

      <NotificationButton>
        <NotificationIcon 
          fill={theme.COLORS.BLUE} 
          height={28}
          width={28}
        />
      </NotificationButton>
    </HeaderContainer>
  )
}