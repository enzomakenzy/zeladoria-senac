import { useState } from "react";

import { ButtonContainer, Container, FormContainer, Main, ModalContentContainer, ModalCreateRoomDescription, ModalCreateRoomTitle, ScreenTitle } from "./styles";

import { Header } from "@components/Header";
import { FormInput } from "@components/FormInput";
import { LargeButton } from "@components/LargeButton";
import { CustomModal } from "@components/CustomModal";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Checked from "@assets/checked.svg";
import { useNavigation } from "@react-navigation/native";

import { HomeStackNavigationProps } from "@routes/stacks/home-stack.routes";

const editRoomFormSchema = z.object({
  roomName: z
    .string("Informe o nome da sala"),
  capacity: z
    .string("Informe a capacidade da sala"),
  location: z
    .string("Informe a localização da sala"),
  description: z
    .string("Informe a descrição da sala")
});

type editRoomFormData = z.infer<typeof editRoomFormSchema>;

export function EditRoom() {
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
  const [modalVisibleDelete, setModalVisibleDelete] = useState(false);
  const [deleteRoom, setDeleteRoom] = useState(false);
  
  const navigation = useNavigation<HomeStackNavigationProps>();

  const { control, handleSubmit, formState: { errors }, reset } = useForm<editRoomFormData>({
    resolver: zodResolver(editRoomFormSchema)
  })

  function handleEditNewRoom({ roomName, capacity, location, description }: editRoomFormData) {
    setModalVisibleEdit(true);
    console.log({ roomName, capacity, location, description });

    setTimeout(() => {
      setModalVisibleEdit(false);
      navigation.goBack();
    }, 2000)
  }

  function handleDeleteRoom() {
    console.log("Sala apagada");
    setDeleteRoom(true);

    setTimeout(() => {
      setModalVisibleDelete(false);
      navigation.reset({
        index: 0,
        routes: [
          { name: "home" }
        ]
      })
    }, 1500);
  }

  return (
    <Container>
      <CustomModal modalVisible={modalVisibleEdit}>
        <ModalContentContainer>
          <ModalCreateRoomTitle>
            Sala atualizada
          </ModalCreateRoomTitle>

          <Checked />
        </ModalContentContainer>
      </CustomModal>

      <CustomModal modalVisible={modalVisibleDelete}>
        {
          deleteRoom ? 
          <ModalContentContainer>
            <ModalCreateRoomTitle>
              Sala apagada
            </ModalCreateRoomTitle>

            <Checked />
          </ModalContentContainer>
          :
          <>
            <ModalCreateRoomTitle>
              Apagar a sala
            </ModalCreateRoomTitle>

            <ModalCreateRoomDescription>
              Deseja mesmo apagar a sala "nome da sala"?
            </ModalCreateRoomDescription>

            <ModalContentContainer>
              <LargeButton 
                textButton="Cancelar" 
                style={{ width: "48%" }} 
                onPress={() => setModalVisibleDelete(false)}
              />

              <LargeButton 
                textButton="Apagar" 
                primary="red"
                style={{ width: "48%" }} 
                onPress={handleDeleteRoom}
              />
            </ModalContentContainer>
          </>
        }
      </CustomModal>

      <Header />
      
      <Main>
        <ScreenTitle>Editar sala</ScreenTitle>

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
                inputName="Nome da sala" 
                placeholder="Digite o nome da sala"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.capacity?.message}
              />
            ))}
          />

          <Controller 
            control={control}
            name="location"
            render={(({ field: {onChange, value} }) => (
              <FormInput 
                inputName="Nome da sala" 
                placeholder="Digite o nome da sala"
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
                inputName="Capacidade" 
                placeholder="Digite a capacidade da sala"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.description?.message}
              />
            ))}
          />
        </FormContainer>

        <ButtonContainer>
          <LargeButton
            textButton="Atualizar"
            onPress={handleSubmit(handleEditNewRoom)}
          />

          <LargeButton 
            textButton="Excluir"
            primary="red"
            onPress={() => setModalVisibleDelete(true)}
          />
        </ButtonContainer>
      </Main>
    </Container>
  )
}