import { Image } from "react-native";
import { Container, ImgNameContainer, Main, ScreenTitle, UserNameText } from "./styles";

import { Header } from "@components/Header";

import ImageProfile from "@assets/profile-img.png";

export function Profile() {
  return (
    <Container>
      <Header />

      <Main>
        <ScreenTitle>Perfil</ScreenTitle>

        <ImgNameContainer>
          <Image 
            source={ImageProfile}
            style={{ width: 100, height: 100 }}
          />
          <UserNameText>Enzo Makenzy de Queiroz Bezerra</UserNameText>
        </ImgNameContainer>
      </Main>
    </Container>
  )
}