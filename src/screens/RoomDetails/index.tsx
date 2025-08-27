import { Container, InfoRoomContainer, InfoRoomText, Line, Main, ModalButtonsContainer, ModalInfoContainer, ModalTitle, RoomNameText, ScreenTitle} from "./styles";

import { Header } from "@components/Header";
import { FormInput } from "@components/FormInput";
import { CustomModal } from "@components/CustomModal";
import { LargeButton } from "@components/LargeButton";

import { useEffect, useState } from "react";

import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminButton } from "@components/AdminButton";

import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import Toast from "react-native-toast-message";

import { HomeStackProps } from "@routes/stacks/home-stack.routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RoomDetailsScreenProps = NativeStackScreenProps<HomeStackProps, "roomDetails">;

const cleanRoomFormSchema = z.object({
  observations: z.string().optional()
})

type CleanRoomFormData = z.infer<typeof cleanRoomFormSchema>;

export function RoomDetails({ route }: RoomDetailsScreenProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const { control, handleSubmit } = useForm<CleanRoomFormData>({
    resolver: zodResolver(cleanRoomFormSchema)
  });

  const { id } = route.params;

  function handleCleanRoom({ observations }: CleanRoomFormData) {
    setModalVisible(false);
    console.log({ observations });
  }

  async function fetchDetailRoom() {
    try {
      const { data } = await api.get(`/salas/${id}`);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const errorMessage = isAppError ? error.message : "Não foi possível visualizar a sala"

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
    }
  }

  useEffect(() => {
    fetchDetailRoom();
  }, []);
  
  return (
    <Container>
      <CustomModal modalVisible={modalVisible}>
        <ModalTitle>Marcar sala como limpa</ModalTitle>

        <ModalInfoContainer>
          <Controller 
            control={control}
            name="observations"
            render={(({ field: { onChange, value } }) => (
              <FormInput 
                inputName="Adicionar observação (opcional)" 
                placeholder="Observações" 
                editable
                value={value}
                onChangeText={onChange}
              />
            ))}
          />
        </ModalInfoContainer>

        <ModalButtonsContainer>
          <LargeButton 
            textButton="Limpar" 
            onPress={handleSubmit(handleCleanRoom)} 
          />

          <LargeButton 
            textButton="Cancelar" 
            primary="red"
            onPress={() => setModalVisible(false)} 
          />
        </ModalButtonsContainer>

      </CustomModal>

      <Header name="Enzo Makenzy" />

      <Main>
        <ScreenTitle>
          Detalhes da Sala
        </ScreenTitle>

        <Line />

        <RoomNameText>
          Laboratório 3
        </RoomNameText>

        <InfoRoomContainer>
          <InfoRoomText>
            <InfoRoomText textStyle="medium">Capacidade: </InfoRoomText>
            30
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Status da limpeza: </InfoRoomText>
            30
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Localização: </InfoRoomText>
            Bloco A
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Última limpeza: </InfoRoomText>
            02/08/2025 às 12:00
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Último funcionário a limpar: </InfoRoomText>
            Enzo Makenzy
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Descrição: </InfoRoomText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Observação da limpeza: </InfoRoomText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.
          </InfoRoomText>
        </InfoRoomContainer>

        <LargeButton textButton="Marcar sala como limpa" onPress={() => setModalVisible(true)} />

        <AdminButton name="Editar sala" screen="editRoom" icon="edit" /> 
      </Main>
    </Container>
  )
}