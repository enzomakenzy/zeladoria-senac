import { Image, Modal } from "react-native";
import { Container, ContentContainer, ImgNameContainer, InputInfoContainer, Main, ModalChangePasswordTitle, ModalContainer, ModalContentContainer, ModalDetailsContainer, ScreenTitle, UserNameText } from "./styles";

import { Header } from "@components/Header";

import ImageProfile from "@assets/profile-img.png";
import { FormInput } from "@components/FormInput";
import { LargeButton } from "@components/LargeButton";
import { useState } from "react";

export function Profile() {
  const [modalVisible, setModalVisible] = useState(false);

  function handleChangePassword() {
    setModalVisible(false)
  }

  return (
    <Container>
      <Modal 
        animationType="fade"
        transparent
        visible={modalVisible}
        navigationBarTranslucent
        statusBarTranslucent
      >
        <ModalContainer>
          <ModalDetailsContainer>
            <ModalChangePasswordTitle>
              Trocar senha
            </ModalChangePasswordTitle>

            <ModalContentContainer>
              <FormInput 
                editable={true} 
                inputName="Senha atual" 
                placeholder="Senha atual"
              />

              <FormInput 
                editable={true} 
                inputName="Nova senha" 
                placeholder="Nova senha"
              />

              <FormInput 
                editable={true} 
                inputName="Confirmar nova senha" 
                placeholder="Confirmar nova senha" 
              />
            </ModalContentContainer>

            <LargeButton 
              textButton="Salvar" 
              primary 
              onPress={handleChangePassword} 
            />
          </ModalDetailsContainer>
        </ModalContainer>
      </Modal> 

      <Header />

      <Main>
        <ContentContainer>
          <ScreenTitle>Perfil</ScreenTitle>

          <ImgNameContainer>
            <Image 
              source={ImageProfile}
              style={{ width: 100, height: 100 }}
            />
            <UserNameText>Enzo Makenzy de Queiroz Bezerra</UserNameText>
          </ImgNameContainer>

          <InputInfoContainer>
            <FormInput 
              editable={false} 
              inputName="Email (opcional)" 
              inputInfo="enzo@email.com" 
            />

            <FormInput 
              editable={false} 
              inputName="Senha" 
              inputInfo="*********" 
            />
          </InputInfoContainer>

          <LargeButton 
            textButton="Trocar senha" 
            primary 
            onPress={() => setModalVisible(true)} 
          />
        </ContentContainer>

        <LargeButton textButton="Sair" />
      </Main>
    </Container>
  )
}