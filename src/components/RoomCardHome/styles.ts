import styled, { css } from "styled-components/native";
import CircleSvg from "@assets/circle.svg";

type StatusProp = {
  roomStatus: "Limpa" | "Limpeza Pendente"
} 

type ActionButtonProp = {
  buttonColor: "blue" | "red";
}

export const CardContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.58
})`
  background-color: ${({ theme }) => theme.COLORS.BLACK.TRANSPARENCE_4};
  padding: 10px;
  gap: 4px;
  border-radius: 6px;
  margin-bottom: 14px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RoomName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE};
    font-family: ${theme.FONTS.SEMI_BOLD};
  `}
  font-size: 18px;
`;  

export const StatusRoomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  justify-content: center;
`;

export const RoomStatus = styled.Text<StatusProp>`
  ${({ theme, roomStatus }) => css`
    color: ${roomStatus == "Limpa" ? theme.COLORS.GREEN : theme.COLORS.ORANGE.MAIN};
    font-size: ${theme.FONTS.MEDIUM};
  `}
  font-size: 14px;
`;

export const RoomDetailsContainer = styled.View`
  flex-direction: row;
`;

export const InfoContainer = styled.View`
  flex: 1;
  gap: 4px;
`;

export const RoomInfo = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
    font-family: ${theme.FONTS.MEDIUM};
  `}
  font-size: 14px;
  margin-bottom: 2px;
`;


export const CircleIcon = styled(CircleSvg).attrs<StatusProp>(({ theme, roomStatus }) => ({
  fill: roomStatus == "Limpa" ? theme.COLORS.GREEN : theme.COLORS.ORANGE.MAIN,
  height: 12,
  width: 12
}))``;

export const ButtonsContainer = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
`;

export const ActionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})<ActionButtonProp>`
  background-color: ${({ theme, buttonColor }) => buttonColor === "blue" ? theme.COLORS.BLUE : theme.COLORS.RED};
  padding: 5px;
  border-radius: 6px;
`;