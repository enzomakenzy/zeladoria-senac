import { Image, KeyboardAvoidingView, Platform } from "react-native";

import { Container, DescriptionText, FormContainer, Title } from "./styles";

import SenacLogoImg from "@assets/senac-logo-login.png";

import { FormInput } from "@components/FormInput";
import { LargeButton } from "@components/LargeButton";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "@hooks/useAuth";
import { AppError } from "@utils/AppError";
import Toast from "react-native-toast-message";
import { useState } from "react";

const signInFormSchema = z.object({
  username: z
    .string("Campo vazio"),
  password: z
    .string("Campo vazio")
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema)
  });
  
  const { signIn } = useAuth();

  async function handleSignIn({ username, password }: SignInFormData) {
    try {
      setIsLoading(true)
      await signIn(username, password);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const errorMessage = isAppError ? error.message : "Não foi possível entrar. Tente novamente mais tarde"

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
      })
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Container>
        <Image 
          source={SenacLogoImg}
          style={{ width: 136, height: 80, marginBottom: 50, marginHorizontal: "auto" }}
        />

        <Title>
          Bem vindo!
        </Title>

        <DescriptionText>
          Informe seus dados para entrar
        </DescriptionText>

        <FormContainer>
          <Controller 
            control={control}
            name="username"
            render={(({ field: { onChange, value } }) => (
              <FormInput 
                inputName="Usuário, Matrícula ou CPF" 
                placeholder="Usuário, Matrícula ou CPF" 
                icon="user"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.username?.message}
              />  
            ))}
          />

          <Controller 
            control={control}
            name="password"
            render={(({ field: { onChange, value } }) => (
              <FormInput 
                inputName="Senha" 
                placeholder="Senha" 
                icon="lock"
                value={value}
                onChangeText={onChange}
                onSubmitEditing={handleSubmit(handleSignIn)}
                returnKeyType="send"
                secureTextEntry
                errorMessage={errors.password?.message}
                autoCapitalize="none"
              />
            ))}
          />
        </FormContainer>

        <LargeButton 
          textButton="Entrar" 
          onPress={handleSubmit(handleSignIn)}
          isLoading={isLoading}
        />
      </Container>
    </KeyboardAvoidingView>
  )
}