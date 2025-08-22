import { useState } from "react";
import { Image } from "react-native";

import { Container, ContentContainer, ImgNameContainer, InputInfoContainer, Main, ModalChangePasswordTitle, ModalContentContainer, ScreenTitle, UserNameText } from "./styles";

import { Header } from "@components/Header";
import { FormInput } from "@components/FormInput";
import { LargeButton } from "@components/LargeButton";
import { CustomModal } from "@components/CustomModal";

import ImageProfile from "@assets/profile-img.png";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const changePasswordFormSchema = z.object({
  currentPassword: z
    .string("Informe a senha atual"),
  newPassword: z
    .string("Informe a nova senha")
    .min(8, { error: "A senha deve ter no mínimo 8 caracteres" }),
  confirmNewPassword: z
    .string("Confirma a sua senha" )
    .min(8, { error: "A senha deve ter no mínimo 8 caracteres" })
}).refine(({ newPassword, confirmNewPassword }) => newPassword === confirmNewPassword, {
  error: "As senhas não coincidem", 
  path: ["confirmNewPassword"]
});

type ChangePasswordFormData = z.infer<typeof changePasswordFormSchema>;

export function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  
  const { control, handleSubmit, formState: { errors }, reset } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordFormSchema)
  });

  function handleChangePassword({ currentPassword, newPassword, confirmNewPassword }: ChangePasswordFormData) {
    console.log({ currentPassword, newPassword, confirmNewPassword });
    setModalVisible(false);
    reset();
  }

  function handleCancelChangePassword() {
    setModalVisible(false);
    reset();
  }

  return (
    <Container>
      <CustomModal modalVisible={modalVisible}>
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
                errorMessage={errors.currentPassword?.message}
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
                errorMessage={errors.newPassword?.message}
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
                value={value}
                onChangeText={onChange}
                errorMessage={errors.confirmNewPassword?.message}
              />
            ))}
          />
        </ModalContentContainer>

        <LargeButton 
          textButton="Salvar" 
          primary 
          onPress={handleSubmit(handleChangePassword)} 
        />

        <LargeButton 
          textButton="Cancelar" 
          primary 
          onPress={handleCancelChangePassword} 
        />
      </CustomModal>

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