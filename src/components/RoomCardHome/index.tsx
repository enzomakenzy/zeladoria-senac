import { useEffect, useState } from "react";
import { TouchableOpacityProps } from "react-native";

import { CardContainer, TitleContainer, RoomName, RoomInfo, RoomStatus, CircleIcon, StatusRoomContainer, RoomDetailsContainer, InfoContainer, ActionButton, ButtonsContainer } from "./styles"

import EditIcon from "@assets/edit.svg";
import DeleteIcon from "@assets/delete.svg";

import { transformUtcToParseISO } from "@utils/transformUtcToParseISO";

type Props = TouchableOpacityProps & {
  roomName: string;
  roomCapacity: number;
  roomLocation: string;
  roomStatus: "Limpa" | "Limpeza Pendente";
  lastClean: string;
  lastStaffClean: string;
  description: string;
}

export function RoomCardHome({ id, roomName, roomCapacity, roomLocation, roomStatus, lastClean, lastStaffClean, description, ...rest }: Props) {
  const [roomStatusName, setRoomStatusName] = useState<"Limpa" | "Limpeza Pendente">();
  
  useEffect(() => {
    roomStatus == "Limpa" ? setRoomStatusName("Limpa") : setRoomStatusName("Limpeza Pendente");
  }, [roomStatus]);

  return (
    <CardContainer {...rest}>
      <TitleContainer>
        <RoomName>{roomName}</RoomName>
        
        <StatusRoomContainer>
          <RoomStatus roomStatus={roomStatus}>{roomStatusName}</RoomStatus>
          <CircleIcon roomStatus={roomStatus} />
        </StatusRoomContainer>
      </TitleContainer>
      
      <RoomDetailsContainer>
        <InfoContainer>
          <RoomInfo>Capacidade: {roomCapacity}</RoomInfo>
          <RoomInfo>Localização: {roomLocation}</RoomInfo>
          <RoomInfo>Última limpeza: {transformUtcToParseISO(lastClean)}</RoomInfo>
          <RoomInfo>Último funcionário a limpar: {lastStaffClean}</RoomInfo>
          <RoomInfo>Descrição: {description}</RoomInfo>
        </InfoContainer>

        <ButtonsContainer>
          <ActionButton buttonColor="blue">
            <EditIcon />
          </ActionButton>

          <ActionButton buttonColor="red">
            <DeleteIcon />
          </ActionButton>
        </ButtonsContainer>
      </RoomDetailsContainer>
    </CardContainer>
  );
}