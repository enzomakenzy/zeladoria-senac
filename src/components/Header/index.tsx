import { Image } from "react-native";

import { HeaderContainer, HiText, NavContainer, NotificationButton, NotificationIcon, StaffName, TextContainer } from "./styles";

import SenacLogoImage from "@assets/senac-logo.png";

type Props = {
  name?: string;
}

export function Header({ name }: Props) {
  return (
    <HeaderContainer>
      <Image 
        source={SenacLogoImage} 
        resizeMode="contain"
        style={{ width: 75, height: 48 }} 
      />

      <NavContainer>
        {
          name && 
          <TextContainer>
            <HiText>
              Olá,
            </HiText>

            <StaffName>
              {name}!
            </StaffName>
          </TextContainer>
        }
        
        <NotificationButton>
          <NotificationIcon />
        </NotificationButton>
      </NavContainer>
      
    </HeaderContainer>
  )
}