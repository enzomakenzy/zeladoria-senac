import { Image } from "react-native";

import { HeaderContainer, HiText, NavContainer, NotificationButton, NotificationIcon, StaffName, TextContainer } from "./styles";

import SenacLogoImage from "@assets/senac-logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <Image 
        source={SenacLogoImage} 
        resizeMode="contain"
        style={{ width: 75, height: 48 }} 
      />

      <NavContainer>
        
        <NotificationButton>
          <NotificationIcon />
        </NotificationButton>
      </NavContainer>
      
    </HeaderContainer>
  )
}