import { useEffect, useState } from "react";
import { CardContainer, InfoRoomContainer, RoomName, RoomInfo, RoomStatus, CircleIcon, StatusRoomContainer } from "./styles"
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  roomName: string;
  roomCapacity: string;
  roomLocation: string;
  roomStatus: boolean;
}

export function RoomCardHome({ roomName, roomCapacity, roomLocation, roomStatus, ...rest }: Props) {
  const [roomStatusName, setRoomStatusName] = useState<"Limpa" | "Limpeza Pendente">();
  
  useEffect(() => {
    roomStatus ? setRoomStatusName("Limpa") : setRoomStatusName("Limpeza Pendente");
  }, [roomStatus]);

  return (
    <CardContainer {...rest}>
      <InfoRoomContainer>
        <RoomName>{roomName}</RoomName>
        <RoomInfo>Capacidade: {roomCapacity}</RoomInfo>
        <RoomInfo>Localização: {roomLocation}</RoomInfo>
      </InfoRoomContainer>
      
      <StatusRoomContainer>
        <RoomStatus roomStatus={roomStatus}>{roomStatusName}</RoomStatus>
        <CircleIcon roomStatus={roomStatus} />
      </StatusRoomContainer>
    </CardContainer>
  );
}