import { useEffect, useState } from "react";
import { CardContainer, InfoRoomContainer, RoomName, RoomInfo, RoomStatus, CircleIcon, StatusRoomContainer } from "./styles"
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  roomName: string;
  roomCapacity: number;
  roomLocation: string;
  roomStatus: "Limpa" | "Limpeza Pendente";
}

export function RoomCardHome({ id, roomName, roomCapacity, roomLocation, roomStatus, ...rest }: Props) {
  const [roomStatusName, setRoomStatusName] = useState<"Limpa" | "Limpeza Pendente">();
  
  useEffect(() => {
    roomStatus == "Limpa" ? setRoomStatusName("Limpa") : setRoomStatusName("Limpeza Pendente");
  }, [roomStatus]);

  return (
    <CardContainer {...rest}>
      <InfoRoomContainer>
        <RoomName>{roomName}</RoomName>
        <RoomInfo>Capacidade: {roomCapacity}</RoomInfo>
      </InfoRoomContainer>
      
      <StatusRoomContainer>
        <RoomStatus roomStatus={roomStatus}>{roomStatusName}</RoomStatus>
        <CircleIcon roomStatus={roomStatus} />
      </StatusRoomContainer>
    </CardContainer>
  );
}