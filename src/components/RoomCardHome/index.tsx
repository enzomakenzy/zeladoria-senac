import { useEffect, useState } from "react";
import { TouchableOpacityProps } from "react-native";

import { CardContainer, TitleContainer, RoomName, RoomInfo, RoomStatus, CheckStyledIcon, ScheduleStyledIcon, StatusRoomContainer, RoomDetailsContainer, InfoContainer, CleanButton, CleanText, BoldText } from "./styles"

import CleanIcon from "@assets/clean-home.svg";

type Props = TouchableOpacityProps & {
  roomName: string;
  roomCapacity: number;
  roomLocation: string;
  roomStatus: "Limpa" | "Limpeza Pendente";
  lastClean: string;
}

export function RoomCardHome({ id, roomName, roomCapacity, roomLocation, roomStatus, lastClean, ...rest }: Props) {
  const [roomStatusName, setRoomStatusName] = useState<"Limpa" | "Pendente">();
  
  useEffect(() => {
    roomStatus == "Limpa" ? setRoomStatusName("Limpa") : setRoomStatusName("Pendente");
  }, [roomStatus]);

  return (
    <CardContainer {...rest}>
      <TitleContainer>
        <RoomName>{roomName}</RoomName>
        
        <StatusRoomContainer>
          <RoomStatus roomStatus={roomStatus}>{roomStatusName}</RoomStatus>

          { roomStatus === "Limpa" ?
              <CheckStyledIcon roomStatus={roomStatus} />
            :
              <ScheduleStyledIcon roomStatus={roomStatus} />
          }
        </StatusRoomContainer>
      </TitleContainer>
      
      <RoomDetailsContainer>
        <InfoContainer>
          <RoomInfo><BoldText>Capacidade:</BoldText> {roomCapacity}</RoomInfo>
          <RoomInfo><BoldText>Localização:</BoldText> {roomLocation}</RoomInfo>
        </InfoContainer>

        { roomStatus === "Limpeza Pendente" &&
          <CleanButton>
            <CleanText>Limpar</CleanText>
            <CleanIcon />
          </CleanButton>
          }
      </RoomDetailsContainer>
    </CardContainer>
  );
}