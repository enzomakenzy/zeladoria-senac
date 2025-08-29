import { useState } from "react";

import { Container, FormContainer, Main, ModalContentContainer, ModalCreateRoomTitle, ScreenTitle } from "./styles";

import { Header } from "@components/Header";
import { FormInput } from "@components/FormInput";
import { LargeButton } from "@components/LargeButton";
import { CustomModal } from "@components/CustomModal";

import z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Checked from "@assets/checked.svg";

import { HomeStackNavigationProps } from "@routes/stacks/home-stack.routes";
import { useNavigation } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import Toast from "react-native-toast-message";
import { api } from "@services/api";

const createNewRoomFormSchema = z.object({
  roomName: z
    .string("Informe o nome da sala"),
  capacity: z
    .string("Informe a capacidade da sala"),
  location: z
    .string("Informe a localização da sala"),
  description: z
    .string("Informe a descrição da sala")
});

type createNewRoomFormData = z.infer<typeof createNewRoomFormSchema>;

export function CreateRoom() {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<HomeStackNavigationProps>();

  const { control, handleSubmit, formState: { errors }, reset } = useForm<createNewRoomFormData>({
    resolver: zodResolver(createNewRoomFormSchema)
  });

  async function handleCreateNewRoom({ roomName, capacity, location, description }: createNewRoomFormData) {
    try {
      setModalVisible(true);
      
      const response = await api.post(`/salas/`, {
        nome_numero: roomName,
        capacidade: Number(capacity),
        descricao: description,
        localizacao: location
      })

      setTimeout(() => {
        setModalVisible(false);
        navigation.goBack();
      }, 2000);
      
    } catch (error) {
      const isAppError = error instanceof AppError;
      const errorMessage = isAppError ? error.message : "Não foi possível resgatar as salas";

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
      setModalVisible(false);
    } 
  }

  return (
    <Container>
      <CustomModal modalVisible={modalVisible}>
        <ModalContentContainer>
          <ModalCreateRoomTitle>
            Sala criada
          </ModalCreateRoomTitle>

          <Checked />
        </ModalContentContainer>
      </CustomModal>

      <Header />

      <Main>
        <ScreenTitle>Criar nova sala</ScreenTitle>

        <FormContainer>
          <Controller 
            control={control}
            name="roomName"
            render={(({ field: {onChange, value} }) => (
              <FormInput 
                inputName="Nome da sala" 
                placeholder="Digite o nome da sala"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.roomName?.message}
              />
            ))}
          />
          
          <Controller 
            control={control}
            name="capacity"
            render={(({ field: {onChange, value} }) => (
              <FormInput 
                inputName="Capacidade" 
                placeholder="Digite a capacidade da sala"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.capacity?.message}
                keyboardType="numeric"
              />
            ))}
          />

          <Controller 
            control={control}
            name="location"
            render={(({ field: {onChange, value} }) => (
              <FormInput 
                inputName="Localização" 
                placeholder="Digite onde fica a sala"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.location?.message}
              />
            ))}
          />

          <Controller 
            control={control}
            name="description"
            render={(({ field: {onChange, value} }) => (
              <FormInput 
                inputName="Descrição" 
                placeholder="Descreva a sala"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.description?.message}
              />
            ))}
          />
        </FormContainer>

        <LargeButton 
          textButton="Criar nova sala" 
          onPress={handleSubmit(handleCreateNewRoom)}
        />
      </Main>
    </Container>
  )
}