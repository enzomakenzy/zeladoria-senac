import { CardContainer, InfoRoomContainer, RoomName, RoomInfo, RoomStatus, CircleIcon, StatusRoomContainer } from "./styles"

export function RoomCardHome() {
  return (
    <CardContainer>
      <InfoRoomContainer>
        <RoomName>Laboratório 3</RoomName>
        <RoomInfo>Capacidade: 30</RoomInfo>
        <RoomInfo>Localização: Bloco A</RoomInfo>
      </InfoRoomContainer>
      
      <StatusRoomContainer>
        <RoomStatus>Limpa</RoomStatus>
        <CircleIcon />
      </StatusRoomContainer>
    </CardContainer>
  );
}