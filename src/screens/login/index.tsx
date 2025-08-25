import { Alert, Image } from "react-native";
import { Container, DescriptionText, FormContainer, Title } from "./styles";

import SenacLogoImg from "@assets/senac-logo-login.png";

import { FormInput } from "@components/FormInput";
import { LargeButton } from "@components/LargeButton";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { api } from "@services/api";
import axios from "axios";

const signInFormSchema = z.object({
  indentifier: z
    .string("Campo vazio"),
  password: z
    .string("Campo vazio")
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema)
  });

  async function handleSignIn({ indentifier, password }: SignInFormData) {
    try {
      const response = await api.post("/accounts/login/", { username: indentifier, password });
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Alert.alert(error.response?.data.non_field_errors[0])
      }
    }
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
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
            name="indentifier"
            render={(({ field: { onChange, value } }) => (
              <FormInput 
                inputName="Usuário, Matrícula ou CPF" 
                placeholder="Usuário, Matrícula ou CPF" 
                icon="user"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.indentifier?.message}
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
              />
            ))}
          />
        </FormContainer>

        <LargeButton 
          textButton="Entrar" 
          onPress={handleSubmit(handleSignIn)}
        />
      </Container>
    </KeyboardAwareScrollView>
  )
}