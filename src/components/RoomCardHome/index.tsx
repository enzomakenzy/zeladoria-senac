import { useEffect, useState } from "react";
import { TouchableOpacityProps } from "react-native";

import { CardContainer, TitleContainer, RoomName, RoomInfo, RoomStatus, CheckIcon, ScheduleIcon, PendingIcon, DirtyIcon, StatusRoomContainer, InfoContainer, BoldText } from "./styles"

import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  roomName: string;
  roomCapacity: number;
  roomLocation: string;
  roomStatus: "Limpa" | "Em Limpeza" | "Limpeza Pendente" | "Suja";
  lastClean: string;
}

export function RoomCardHome({ id, roomName, roomCapacity, roomLocation, roomStatus, lastClean, ...rest }: Props) {
  const [roomStatusName, setRoomStatusName] = useState<"Limpa" | "Pendente" | "Suja" | "Em Limpeza">();
  const theme = useTheme();
  
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
      
      <InfoContainer>
        <RoomInfo><BoldText>Capacidade:</BoldText> {roomCapacity} pessoas</RoomInfo>
        <RoomInfo><BoldText>Localização:</BoldText> {roomLocation}</RoomInfo>
      </InfoContainer>
    </CardContainer>
  );
}