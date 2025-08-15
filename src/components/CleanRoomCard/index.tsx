import { ButtonDetails, ButtonText, CardContainer, RoomInfo, RoomInfoContainer, RoomName } from "./styles"

export function CleanRoomCard() {
  return (
    <CardContainer>
      <RoomInfoContainer>
        <RoomName>Laboratório 2</RoomName>
        <RoomInfo>Limpador por: Enzo Makenzy</RoomInfo>
        <RoomInfo>Data e hora da limpeza: 04/08/2025 às 15:30</RoomInfo>
      </RoomInfoContainer>

      <ButtonDetails>
        <ButtonText>Ver mais</ButtonText>
      </ButtonDetails>
    </CardContainer>
  );  
}
