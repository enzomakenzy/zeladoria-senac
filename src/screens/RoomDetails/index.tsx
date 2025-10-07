import { Container, InfoRoomContainer, InfoRoomText, Main, ModalButtonsContainer, ModalInfoContainer, ModalTitle, RoomNameText } from "./styles";

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
import { Loading } from "@components/Loading";
import { Image } from "react-native";

type RoomDetailsScreenProps = NativeStackScreenProps<HomeStackProps, "roomDetails">;

const cleanRoomFormSchema = z.object({
  observations: z.string().optional()
})

type CleanRoomFormData = z.infer<typeof cleanRoomFormSchema>;

export function RoomDetails({ route }: RoomDetailsScreenProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [room, setRoom] = useState<RoomDTO>({} as RoomDTO);

  const navigation = useNavigation<HomeStackNavigationProps>()

  const { user } = useAuth();

  const { control, handleSubmit } = useForm<CleanRoomFormData>({
    resolver: zodResolver(cleanRoomFormSchema)
  });

  const { qr_code_id } = route.params;

  const baseUrl = "https://zeladoria.tsr.net.br"
  const imagePath = room.imagem;

  const imageUrl = `${baseUrl}${imagePath}`

  async function fetchDetailRoom() {
    try {
      setIsLoading(true);
      const { data } = await api.get(`/salas/${qr_code_id}/`);

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
    } finally {
      setIsLoading(false);
    }
  }
  
  async function handleSetRoomClean({ observations }: CleanRoomFormData) {
    try {
      await api.post(`/salas/${qr_code_id}/marcar_como_limpa/`, {
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

  console.log(room.responsaveis);
  
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

      <Header screenName="Detalhes da sala" variant />

      <Main>
        { isLoading ? (
          <Loading />
        )
        :
        <>    
          <RoomNameText>
            {room.nome_numero}
          </RoomNameText>

          <InfoRoomContainer>
            <InfoRoomText>
              <InfoRoomText textStyle="semibold">Capacidade: </InfoRoomText>
              {room.capacidade}
            </InfoRoomText>

            <InfoRoomText>
              <InfoRoomText textStyle="semibold">Status da limpeza: </InfoRoomText>
              {room.status_limpeza}
            </InfoRoomText>

            <InfoRoomText>
              <InfoRoomText textStyle="semibold">Localização: </InfoRoomText>
              {room.localizacao}
            </InfoRoomText>

            <InfoRoomText>
              <InfoRoomText textStyle="semibold">Última limpeza: </InfoRoomText>
              {transformUtcToParseISO(room.ultima_limpeza_data_hora)}
            </InfoRoomText>

            <InfoRoomText>
              <InfoRoomText textStyle="semibold">Último funcionário a limpar: </InfoRoomText>
              {room.ultima_limpeza_funcionario}
            </InfoRoomText>

            {
              room.responsaveis && room.responsaveis.length > 0 &&
                <InfoRoomText>
                  <InfoRoomText textStyle="semibold">Responsáveis: </InfoRoomText>
                  {room.responsaveis ? room.responsaveis.join(", ") : room.responsaveis}
                </InfoRoomText>
            }

            {
              room.instrucoes &&
                <InfoRoomText>
                  <InfoRoomText textStyle="semibold">Instruções: </InfoRoomText>
                  {room.instrucoes}
                </InfoRoomText>
            }

            {
              room.descricao &&
                <InfoRoomText>
                  <InfoRoomText textStyle="semibold">Descrição: </InfoRoomText>
                  {room.descricao}
                </InfoRoomText>
            }

            {
              room.imagem &&
                <Image 
                  source={{ uri: imageUrl }}
                  width={150}
                  height={150}
                  resizeMode="contain"
                  style={{ borderRadius: 6, marginTop: 10 }}
                />
            }
          </InfoRoomContainer>

          { room.status_limpeza === "Limpeza Pendente" &&
            <LargeButton textButton="Marcar sala como limpa" onPress={() => setModalVisible(true)} />
          }

          { user.is_superuser &&
            <AdminButton name="Editar sala" screen="editRoom" icon="edit" roomId={room as RoomDTO} /> 
          }
        </>
        }
      </Main>
    </Container>
  )
}