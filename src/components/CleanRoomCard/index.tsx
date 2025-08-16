import { ButtonDetails, ButtonText, CardContainer, RoomInfo, RoomInfoContainer, RoomName } from "./styles"

export type CleanRoomProps = {
  roomName: string;
  cleanerBy: string;
  dateAndTimeOfCleaning: string
}

export function CleanRoomCard({ roomName, cleanerBy, dateAndTimeOfCleaning }: CleanRoomProps) {
  return (
    <CardContainer>
      <RoomInfoContainer>
        <RoomName>{roomName}</RoomName>
        <RoomInfo>Limpador por: {cleanerBy}</RoomInfo>
        <RoomInfo>Data e hora da limpeza: {dateAndTimeOfCleaning}</RoomInfo>
      </RoomInfoContainer>

      <ButtonDetails>
        <ButtonText>Ver mais</ButtonText>
      </ButtonDetails>
    </CardContainer>
  );  
}
