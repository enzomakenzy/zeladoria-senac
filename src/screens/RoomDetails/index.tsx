import { Fragment, useState } from "react";
import { Image, KeyboardAvoidingView, Platform } from "react-native";

import { CancelButton, CancelIcon, CleanContainer, CleanTitleContainer, Container, InfoRoomContainer, StyledText, Line, Main, Title, CleanRoomFormContainer, CleanFieldContainer, CleanObservationsInput, CleanSelectedImagesArea, CameraIcon } from "./styles";

import { Header } from "@components/Header";
import { LargeButton } from "@components/LargeButton";
import { AdminButton } from "@components/AdminButton";
import { Loading } from "@components/Loading";

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
import { StartCleanDTO } from "@dtos/StartCleanDTO";
import { useAuth } from "@hooks/useAuth";
import { useFocusScreen } from "@hooks/useFocusScreen";
import { transformUtcToParseISO } from "@utils/transformUtcToParseISO";

import CleanIcon from "@assets/clean-button.svg";
import CheckedIcon from "@assets/finalized-clean.svg";

type RoomDetailsScreenProps = NativeStackScreenProps<HomeStackProps, "roomDetails">;

const cleanRoomFormSchema = z.object({
  observations: z.string().optional()
})

type CleanRoomFormData = z.infer<typeof cleanRoomFormSchema>;

export function RoomDetails({ route }: RoomDetailsScreenProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [room, setRoom] = useState<RoomDTO>({} as RoomDTO);
  const [startCleanButtonStatus, setStartCleanButtonStatus] = useState<"active" | "inactive">();
  const [showCleanForm, setShowCleanForm] = useState(false);
  const [startCleanRoomData, setStartCleanRoomData] = useState<StartCleanDTO>({} as StartCleanDTO);

  const navigation = useNavigation<HomeStackNavigationProps>();

  const { user } = useAuth();

  const { control, handleSubmit } = useForm<CleanRoomFormData>({
    resolver: zodResolver(cleanRoomFormSchema)
  });

  const { qr_code_id } = route.params;

  const baseUrl = "https://zeladoria.tsr.net.br";
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
  
  async function handleStartClean() {
    try {
      // const { data } = await api.post(`/salas/${qr_code_id}/iniciar_limpeza/`);

      // setStartCleanRoomData(data);
      setStartCleanButtonStatus("inactive");
      setShowCleanForm(prev => !prev);
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Container>
        <Header screenName="Detalhes da sala" variant />

        <Main>
          { isLoading ? 
            <Loading />
          :
            <Fragment>    
              <Title>
                {room.nome_numero}
              </Title>

              <InfoRoomContainer>
                <StyledText>
                  <StyledText textStyle="semibold">Capacidade: </StyledText>
                  {room.capacidade}
                </StyledText>

                <StyledText>
                  <StyledText textStyle="semibold">Status da limpeza: </StyledText>
                  {room.status_limpeza}
                </StyledText>

                <StyledText>
                  <StyledText textStyle="semibold">Localização: </StyledText>
                  {room.validade_limpeza_horas}
                </StyledText>

                <StyledText>
                  <StyledText textStyle="semibold">Última limpeza: </StyledText>
                  {transformUtcToParseISO(room.ultima_limpeza_data_hora)}
                </StyledText>

                <StyledText>
                  <StyledText textStyle="semibold">Último funcionário a limpar: </StyledText>
                  {room.ultima_limpeza_funcionario}
                </StyledText>

                {
                  room.responsaveis && room.responsaveis.length > 0 &&
                    <StyledText>
                      <StyledText textStyle="semibold">Responsáveis: </StyledText>
                      {room.responsaveis ? room.responsaveis.join(", ") : room.responsaveis}
                    </StyledText>
                }

                {
                  room.instrucoes &&
                    <StyledText>
                      <StyledText textStyle="semibold">Instruções: </StyledText>
                      {room.instrucoes}
                    </StyledText>
                }

                {
                  room.descricao &&
                    <StyledText>
                      <StyledText textStyle="semibold">Descrição: </StyledText>
                      {room.descricao}
                    </StyledText>
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

              { (room.status_limpeza === "Limpeza Pendente" || room.status_limpeza === "Suja" || room.status_limpeza === "Em Limpeza") &&
                <LargeButton 
                  textButton="Iniciar limpeza" 
                  status={startCleanButtonStatus}
                  onPress={handleStartClean}
                  Icon={CleanIcon}
                />
              }

            </Fragment>
          }

          { showCleanForm && (
            <CleanContainer>
              <Line />

              <CleanTitleContainer>
                <Title>Limpeza Iniciada</Title>

                <CancelButton>
                  <CancelIcon />
                </CancelButton>
              </CleanTitleContainer>

              <CleanRoomFormContainer>
                <StyledText>
                  <StyledText textStyle="semibold">Funcionário: </StyledText>
                  {startCleanRoomData.funcionario_responsavel}
                </StyledText>

                <StyledText>
                  <StyledText textStyle="semibold">Horário de início: </StyledText>
                  {startCleanRoomData.data_hora_inicio}
                </StyledText>

                <StyledText>
                  <StyledText textStyle="semibold">Tempo atual de limpeza: </StyledText>
                  
                </StyledText>
                
                <CleanFieldContainer>
                  <StyledText textStyle="semibold">Observações da limpeza: </StyledText>

                  <CleanObservationsInput />
                </CleanFieldContainer>

                <CleanFieldContainer>
                  <StyledText textStyle="semibold">Fotos da limpeza: </StyledText>

                  <CleanSelectedImagesArea error={false}>
                    <CameraIcon />
                    <StyledText textColor="gray">Selecione até 3 fotos da limpeza</StyledText>
                  </CleanSelectedImagesArea>
                </CleanFieldContainer>

                <LargeButton textButton="Finalizar limpeza" Icon={CheckedIcon} />
              </CleanRoomFormContainer>
            </CleanContainer>
          )}
        </Main>

        { user.is_superuser &&
          <AdminButton 
            name="Editar sala" 
            screen="editRoom" 
            icon="edit" 
            roomId={room as RoomDTO} 
          /> 
        }
      </Container>
    </KeyboardAvoidingView>
  )
}