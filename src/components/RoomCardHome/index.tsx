import { useEffect, useState } from "react";
import { CardContainer, InfoRoomContainer, RoomName, RoomInfo, RoomStatus, CircleIcon, StatusRoomContainer } from "./styles"

type Props = {
  roomName: string;
  roomCapacity: string;
  roomLocation: string;
  roomStatus: boolean;
}

export function RoomCardHome({ roomName, roomCapacity, roomLocation, roomStatus }: Props) {
  const [roomStatusName, setRoomStatusName] = useState<"Limpa" | "Limpeza Pendente">();
  
  useEffect(() => {
    roomStatus ? setRoomStatusName("Limpa") : setRoomStatusName("Limpeza Pendente");
  }, [roomStatus]);

  return (
    <CardContainer>
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