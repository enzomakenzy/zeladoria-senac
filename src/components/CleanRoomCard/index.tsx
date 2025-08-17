import { TouchableOpacityProps } from "react-native";
import { ButtonDetails, ButtonText, CardContainer, RoomInfo, RoomInfoContainer, RoomName } from "./styles"

export type CleanRoomProps = TouchableOpacityProps & {
  roomName: string;
  cleanerBy: string;
  dateAndTimeOfCleaning: string
}

export function CleanRoomCard({ roomName, cleanerBy, dateAndTimeOfCleaning, ...rest }: CleanRoomProps) {
  return (
    <CardContainer>
      <RoomInfoContainer>
        <RoomName>{roomName}</RoomName>
        <RoomInfo>Limpador por: {cleanerBy}</RoomInfo>
        <RoomInfo>Data e hora da limpeza: {dateAndTimeOfCleaning}</RoomInfo>
      </RoomInfoContainer>

      <ButtonDetails {...rest}>
        <ButtonText>Ver mais</ButtonText>
      </ButtonDetails>
    </CardContainer>
  );  
}
