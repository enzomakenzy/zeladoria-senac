import { TouchableOpacityProps } from "react-native";
import { ButtonDetails, ButtonText, CardContainer, RoomInfo, RoomInfoContainer, RoomName } from "./styles"

export type CleanRoomProps = TouchableOpacityProps & {
  roomName: string;
  cleanerBy: string;
}

export function CleanRoomCard({ roomName, cleanerBy, ...rest }: CleanRoomProps) {
  return (
    <CardContainer>
      <RoomInfoContainer>
        <RoomName>{roomName}</RoomName>
        <RoomInfo>Limpador por: {cleanerBy}</RoomInfo>
      </RoomInfoContainer>

      <ButtonDetails {...rest}>
        <ButtonText>Detalhes da limpeza</ButtonText>
      </ButtonDetails>
    </CardContainer>
  );  
}
