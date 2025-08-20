import { Header } from "@components/Header";
import { Container, InfoRoomContainer, InfoRoomText, Line, Main, RoomNameText, ScreenTitle, StatusRoomContainer, StatusRoomText } from "./styles";
import { LargeButton } from "@components/LargeButton";

export function RoomDetails() {
  return (
    <Container>
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
        </InfoRoomContainer>

        <LargeButton primary textButton="Marcar sala como limpa"  />
      </Main>
    </Container>
  )
}