import { useState } from "react";
import { Image } from "react-native";

import { ButtonsContainer, Container, ContentContainer, ImgNameContainer, InputInfoContainer, Line, Main, ModalChangePasswordTitle, ModalContentContainer, ScreenTitle, UserNameText } from "./styles";

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
  const { signOut } = useAuth();

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<ProfileStackNavigationProps>();
  
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
            <UserNameText>Enzo Makenzy de Queiroz Bezerra</UserNameText>
          </ImgNameContainer>

          <InputInfoContainer>
            <FormInput 
              editable={false} 
              inputName="Email (opcional)" 
              value="enzo@email.com" 
            />

            <FormInput 
              editable={false} 
              inputName="Senha" 
              value="*********" 
            />
          </InputInfoContainer>

          <LargeButton 
            textButton="Trocar senha"  
            onPress={() => setModalVisible(true)} 
          />

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