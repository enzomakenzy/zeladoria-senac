import { Image } from "react-native";
import { Container, ImgNameContainer, InputInfoContainer, Main, ScreenTitle, UserNameText } from "./styles";

import { Header } from "@components/Header";

import ImageProfile from "@assets/profile-img.png";
import { FormInput } from "@components/FormInput";

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

        <InputInfoContainer>
          <FormInput inputName="Email (opcional)" inputInfo="enzo@email.com" />
          <FormInput inputName="Senha" inputInfo="*********" />
        </InputInfoContainer>
      </Main>
    </Container>
  )
}