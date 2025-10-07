import { useEffect, useState } from "react";
import { TouchableOpacityProps } from "react-native";

import { CardContainer, TitleContainer, RoomName, RoomInfo, RoomStatus, CheckIcon, ScheduleIcon, PendingIcon, DirtyIcon, StatusRoomContainer, BoldText } from "./styles"

type Props = TouchableOpacityProps & {
  roomName: string;
  roomCapacity: number;
  roomLocation: string;
  roomStatus: "Limpa" | "Em Limpeza" | "Limpeza Pendente" | "Suja";
}

export function RoomCardHome({ id, roomName, roomCapacity, roomLocation, roomStatus, ...rest }: Props) {
  const [roomStatusName, setRoomStatusName] = useState<"Limpa" | "Pendente" | "Suja" | "Em Limpeza">();
  
  useEffect(() => {
    if (roomStatus === "Limpa") setRoomStatusName("Limpa");
    if (roomStatus === "Em Limpeza") setRoomStatusName("Em Limpeza");
    if (roomStatus === "Limpeza Pendente") setRoomStatusName("Pendente");
    if (roomStatus === "Suja") setRoomStatusName("Suja");
  }, [roomStatus]);

  return (
    <CardContainer {...rest}>
      <TitleContainer>
        <RoomName>{roomName}</RoomName>
        
        <StatusRoomContainer>
          <RoomStatus roomStatus={roomStatus}>{roomStatusName}</RoomStatus>

          { roomStatus === "Limpa" ?
              <CheckIcon />
            :
              roomStatus === "Em Limpeza" ?
                <ScheduleIcon />
              :
                roomStatus === "Limpeza Pendente" ?
                  <PendingIcon />
                :
                  <DirtyIcon />
          }
        </StatusRoomContainer>
      </TitleContainer>
      
      <RoomInfo><BoldText>Capacidade:</BoldText> {roomCapacity} pessoas</RoomInfo>
      <RoomInfo><BoldText>Localização:</BoldText> {roomLocation}</RoomInfo>
    </CardContainer>
  );
}