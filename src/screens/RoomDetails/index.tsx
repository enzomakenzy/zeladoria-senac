import { Container, InfoRoomContainer, InfoRoomText, Line, Main, ModalButtonsContainer, ModalInfoContainer, ModalTitle, RoomNameText, ScreenTitle} from "./styles";

import { Header } from "@components/Header";
import { FormInput } from "@components/FormInput";
import { CustomModal } from "@components/CustomModal";
import { LargeButton } from "@components/LargeButton";
import { AdminButton } from "@components/AdminButton";

import { useState } from "react";

import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import Toast from "react-native-toast-message";

import { HomeStackNavigationProps, HomeStackProps } from "@routes/stacks/home-stack.routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { RoomDTO } from "@dtos/RoomDTO";
import { useAuth } from "@hooks/useAuth";

import { transformUtcToParseISO } from "@utils/transformUtcToParseISO";
import { useFocusScreen } from "@hooks/useFocusScreen";

type RoomDetailsScreenProps = NativeStackScreenProps<HomeStackProps, "roomDetails">;

const cleanRoomFormSchema = z.object({
  observations: z.string().optional()
})

type CleanRoomFormData = z.infer<typeof cleanRoomFormSchema>;

export function RoomDetails({ route }: RoomDetailsScreenProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [room, setRoom] = useState<RoomDTO>({} as RoomDTO);

  const navigation = useNavigation<HomeStackNavigationProps>()

  const { user } = useAuth();

  const { control, handleSubmit } = useForm<CleanRoomFormData>({
    resolver: zodResolver(cleanRoomFormSchema)
  });

  const { id } = route.params;

  async function fetchDetailRoom() {
    try {
      const { data } = await api.get(`/salas/${id}/`);

      setRoom(data)
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
  
  async function handleSetRoomClean({ observations }: CleanRoomFormData) {
    try {
      await api.post(`/salas/${id}/marcar_como_limpa/`, {
        observacoes: observations
      });
      
      navigation.reset({
        index: 0,
        routes: [{ name: "home" }]
      })
      
      setModalVisible(false);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const errorMessage = isAppError ? error.message : "Não foi possível marcar a sala como limpa";
      
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
  
  useFocusScreen(() => {
    fetchDetailRoom();
  });
  
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
            onPress={handleSubmit(handleSetRoomClean)} 
          />

          <LargeButton 
            textButton="Cancelar" 
            primary="red"
            onPress={() => setModalVisible(false)} 
          />
        </ModalButtonsContainer>

      </CustomModal>

      <Header />

      <Main>
        <ScreenTitle>
          Detalhes da Sala
        </ScreenTitle>

        <Line />

        <RoomNameText>
          {room.nome_numero}
        </RoomNameText>

        <InfoRoomContainer>
          <InfoRoomText>
            <InfoRoomText textStyle="medium">Capacidade: </InfoRoomText>
            {room.capacidade}
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Status da limpeza: </InfoRoomText>
            {room.status_limpeza}
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Localização: </InfoRoomText>
            {room.localizacao}
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Última limpeza: </InfoRoomText>
            {transformUtcToParseISO(room.ultima_limpeza_data_hora)}
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Último funcionário a limpar: </InfoRoomText>
            {room.ultima_limpeza_funcionario}
          </InfoRoomText>

          { room.descricao &&
            <InfoRoomText>
              <InfoRoomText textStyle="medium">Descrição: </InfoRoomText>
              {room.descricao}
            </InfoRoomText>
          }
        </InfoRoomContainer>

        { room.status_limpeza === "Limpeza Pendente" &&
          <LargeButton textButton="Marcar sala como limpa" onPress={() => setModalVisible(true)} />
        }

        {
          user.is_superuser &&
          <AdminButton name="Editar sala" screen="editRoom" icon="edit" roomId={room as RoomDTO} /> 
        }
      </Main>
    </Container>
  )
}