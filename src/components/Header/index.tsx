import { Image } from "react-native";

import { ArrowButton, HeaderContainer, ScreenName } from "./styles";

import SenacLogoImage from "@assets/senac-logo.png";
import ProfileImg from "@assets/profile-img.png";
import ArrowBackIcon from "@assets/arrow-back.svg";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

interface Props {
  screenName: string;
  variant?: boolean;
}

export function Header({ screenName, variant = false }: Props) {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <HeaderContainer>
      {
        variant ? 
          <ArrowButton onPress={() => navigation.goBack()}>
            <ArrowBackIcon />
          </ArrowButton>
        :
          <Image 
            source={SenacLogoImage} 
            resizeMode="contain"
            style={{ width: 50, height: 38 }} 
          />
      }

      <ScreenName>
        { screenName }
      </ScreenName>

      {
        !variant &&
        <Image 
          source={ProfileImg}
          resizeMode="contain"
          style={{ width: 50, height: 30 }}
        />
      }
    </HeaderContainer>
  )
}