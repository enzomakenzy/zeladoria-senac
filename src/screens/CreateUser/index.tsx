import { useState } from "react";

import { ButtonsContainer, Container, FormContainer, Main, ModalContentContainer, ModalCreateRoomTitle, ScreenTitle } from "./styles";

import { Header } from "@components/Header";
import { FormInput } from "@components/FormInput";
import { LargeButton } from "@components/LargeButton";
import { CustomModal } from "@components/CustomModal";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { ProfileStackNavigationProps } from "@routes/stacks/profile-stack.routes";
import { zodResolver } from "@hookform/resolvers/zod";

import Checked from "@assets/checked.svg";

const createUserFormSchema = z.object({
  name: z
    .string("Campo vazio"),
  email: z
    .email("Formato do e-mail inválido"),
  password: z
    .string("Campo vazio")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
  confirmPassword: z
    .string("Campo vazio")
    .min(8, "A senha deve ter no mínimo 8 caracteres")
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  error: "As senhas não coincidem",
  path: ["confirmPassword"]
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export function CreateUser() {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<ProfileStackNavigationProps>();

  const { control, handleSubmit, formState: { errors }, reset } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  });

  function handleCreateUser({ name, email, password, confirmPassword }: CreateUserFormData) {
    setModalVisible(true);
    console.log({ name, email, password, confirmPassword });

    setTimeout(() => {
      setModalVisible(false)
      navigation.goBack();
    }, 1500)
  }

  return (
    <Container>
      <CustomModal modalVisible={modalVisible}>
        <ModalContentContainer>
          <ModalCreateRoomTitle>
            Usuário criado
          </ModalCreateRoomTitle>

          <Checked />
        </ModalContentContainer>
      </CustomModal>

      <Header />
      
      <Main>
        <ScreenTitle>
          Criar novo usuário
        </ScreenTitle>

        <FormContainer>
          <Controller 
            control={control}
            name="name"
            render={(({ field: { onChange, value } }) => (
              <FormInput 
                editable={true}
                inputName="Nome"
                placeholder="Digite o nome do usuário"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.name?.message}
              />
            ))}
          />

          <Controller 
            control={control}
            name="email"
            render={(({ field: { onChange, value } }) => (
              <FormInput 
                editable={true}
                inputName="E-mail"
                placeholder="Digite o seu E-mail"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            ))}
          />

          <Controller 
            control={control}
            name="password"
            render={(({ field: { onChange, value } }) => (
              <FormInput 
                editable={true}
                inputName="Senha"
                placeholder="Cria uma senha"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            ))}
          />

          <Controller 
            control={control}
            name="confirmPassword"
            render={(({ field: { onChange, value } }) => (
              <FormInput 
                editable={true}
                inputName="Confirmar a senha"
                placeholder="Confirme a sua senha"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.confirmPassword?.message}
              />
            ))}
          />
        </FormContainer>

        <ButtonsContainer>
          <LargeButton 
            textButton="Criar"
            onPress={handleSubmit(handleCreateUser)}
          />

          <LargeButton 
            textButton="Cancelar"
            primary="red"
            onPress={() => navigation.goBack()}
          />
        </ButtonsContainer>
      </Main>
    </Container>
  )
}