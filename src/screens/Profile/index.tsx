import { useEffect, useState } from "react";
import { Image } from "react-native";

import { ButtonsContainer, Container, ContentContainer, ImgNameContainer, Line, Main, ModalChangePasswordTitle, ModalContentContainer, ScreenTitle, UserNameText } from "./styles";

import { Header } from "@components/Header";
import { FormInput } from "@components/FormInput";
import { LargeButton } from "@components/LargeButton";
import { CustomModal } from "@components/CustomModal";

import ImageProfile from "@assets/profile-img.png";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigation } from "@react-navigation/native";
import { ProfileStackNavigationProps } from "@routes/stacks/profile-stack.routes";

import { useAuth } from "@hooks/useAuth";
import { AppError } from "@utils/AppError";

import Toast from "react-native-toast-message";
import { api } from "@services/api";

const changePasswordFormSchema = z.object({
  currentPassword: z
    .string("Campo vazio"),
  newPassword: z
    .string("Campo vazio")
    .min(8, { error: "A senha deve ter no mínimo 8 caracteres" }),
  confirmNewPassword: z
    .string("Campo vazio")
    .min(8, { error: "A senha deve ter no mínimo 8 caracteres" })
}).refine(({ newPassword, confirmNewPassword }) => newPassword === confirmNewPassword, {
  error: "As senhas não coincidem", 
  path: ["confirmNewPassword"]
});

type ChangePasswordFormData = z.infer<typeof changePasswordFormSchema>;

export function Profile() {
  const { user, signOut } = useAuth();

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<ProfileStackNavigationProps>();
  
  const { control, handleSubmit, formState: { errors }, reset } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordFormSchema)
  });

  async function handleChangePassword({ currentPassword, newPassword, confirmNewPassword }: ChangePasswordFormData) {
    try {
      const { data } = await api.post("/accounts/change_password/", {
        old_password: currentPassword,
        new_password: newPassword, 
        confirm_new_password: confirmNewPassword
      }) 

      console.log(data);

      await signOut();
    } catch (error) {
      const isAppError = error instanceof AppError;
      const errorMessage = isAppError ? error.message : "Não foi possível alterar a senha";

      console.log(errorMessage)

      if (errorMessage !== "Token inválido.") {
        Toast.show({
          type: "error",
          text1: "Erro",
          text2: errorMessage,
          text1Style: {
            fontSize: 18
          },
          text2Style: {
            fontSize: 16
          }
        });
      }

    }
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
                autoCapitalize="none"
                secureTextEntry
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
                autoCapitalize="none"
                secureTextEntry
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
                autoCapitalize="none"
                secureTextEntry
              />
            ))}
          />
        </ModalContentContainer>

        <LargeButton 
          textButton="Salvar" 
          onPress={handleSubmit(handleChangePassword)} 
        />

        <LargeButton 
          textButton="Cancelar" 
          primary="red"
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
            <UserNameText>{user.username}</UserNameText>
          </ImgNameContainer>

          {
            user.email &&
            <FormInput 
              editable={false} 
              inputName="Email" 
              value={user.email} 
            />
          }

          <LargeButton 
            textButton="Trocar senha"  
            onPress={() => setModalVisible(true)} 
            style={{ marginTop: 20 }}
          />

          {
            user.is_superuser &&
            <>
              <Line />
              
              <ButtonsContainer>
                <LargeButton 
                  textButton="Criar novo usuário" 
                  primary="orange"
                  onPress={() => navigation.navigate("createUser")}
                  style={{ width: "48%" }} 
                />
                
                <LargeButton 
                  textButton="Listar usuários" 
                  primary="orange"
                  onPress={() => navigation.navigate("usersList")}
                  style={{ width: "48%" }} 
                />
              </ButtonsContainer>
            </>
          }
        </ContentContainer>

        <LargeButton 
          textButton="Sair" 
          primary="red"
          onPress={signOut}
        />
      </Main>
    </Container>
  )
}