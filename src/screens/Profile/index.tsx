import { useState } from "react";
import { Image, Modal } from "react-native";

import { Controller, useForm } from "react-hook-form";

import { Container, ContentContainer, ImgNameContainer, InputInfoContainer, Main, ModalChangePasswordTitle, ModalContainer, ModalContentContainer, ModalDetailsContainer, ScreenTitle, UserNameText } from "./styles";

import { Header } from "@components/Header";
import { FormInput } from "@components/FormInput";
import { LargeButton } from "@components/LargeButton";

import ImageProfile from "@assets/profile-img.png";

type FormChangePasswordProps = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string
}

export function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const { control, handleSubmit } = useForm<FormChangePasswordProps>();

  function handleChangePassword({ currentPassword, newPassword, confirmNewPassword }: FormChangePasswordProps) {
    setModalVisible(false);
    console.log({ currentPassword, newPassword, confirmNewPassword });
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
              <Controller 
                control={control}
                name="currentPassword"
                render={(({ field: {onChange, value} }) => (
                  <FormInput 
                    editable={true} 
                    inputName="Senha atual" 
                    placeholder="Senha atual"
                    value={value}
                    onChangeText={onChange}
                  />
                ))}
              />

              <Controller 
                control={control}
                name="newPassword"
                render={(({ field: { onChange, value } }) => (
                  <FormInput 
                    editable={true} 
                    inputName="Nova senha" 
                    placeholder="Nova senha"
                    value={value}
                    onChangeText={onChange}
                  />
                ))}
              />

              <Controller 
                control={control}
                name="confirmNewPassword"
                render={(({ field: { onChange, value } }) => (
                  <FormInput 
                    editable={true} 
                    inputName="Confirmar nova senha" 
                    placeholder="Confirmar nova senha" 
                    />
                ))}
              />

            </ModalContentContainer>

            <LargeButton 
              textButton="Salvar" 
              primary 
              onPress={handleSubmit(handleChangePassword)} 
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