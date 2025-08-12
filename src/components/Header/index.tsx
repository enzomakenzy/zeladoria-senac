import { Image } from "react-native";

import { HeaderContainer, HiText, NotificationButton, NotificationIcon, StaffName, TextContainer } from "./styles";

import SenacLogoImage from "@assets/senac-logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <Image 
        source={SenacLogoImage} 
        resizeMode="contain"
        style={{ width: 75, height: 48 }} 
      />

      <TextContainer>
        <HiText>
          Olá,
        </HiText>

        <StaffName>
          Enzo Makenzy!
        </StaffName>
      </TextContainer>
      
      <NotificationButton>
        <NotificationIcon />
      </NotificationButton>
    </HeaderContainer>
  )
}