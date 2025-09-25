import styled, { css } from "styled-components/native";

import CheckIcon from "@assets/check.svg";
import ScheduleIcon from "@assets/schedule.svg"

type StatusProp = {
  roomStatus: "Limpa" | "Em Limpeza" | "Limpeza Pendente" | "Suja"
} 

export const CardContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.58
})`
  background-color: ${({ theme }) => theme.COLORS.WHITE[200]};
  padding: 10px 14px;
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
    color: ${theme.COLORS.BLUE[200]};
    font-family: ${theme.FONTS.SEMI_BOLD};
  `}
  font-size: 18px;
  margin-bottom: 4px;
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

export const CheckStyledIcon = styled(CheckIcon).attrs<StatusProp>(({ theme, roomStatus }) => ({
  fill: roomStatus == "Limpa" ? theme.COLORS.GREEN : theme.COLORS.ORANGE.MAIN,
  height: 16,
  width: 16
}))``;

export const ScheduleStyledIcon = styled(ScheduleIcon).attrs<StatusProp>(({ theme, roomStatus }) => ({
  fill: roomStatus == "Limpa" ? theme.COLORS.GREEN : theme.COLORS.ORANGE.MAIN,
  height: 16,
  width: 16
}))``;

export const RoomDetailsContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const InfoContainer = styled.View`
  flex: 1;
  gap: 4px;
`;

export const RoomInfo = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
    font-family: ${theme.FONTS.REGULAR};
  `}
  font-size: 14px;
  margin-bottom: 2px;
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`

export const CleanButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.55
})`
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE.MAIN};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  border-radius: 6px;
`

export const CleanText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE[100]};
    font-family: ${theme.FONTS.MEDIUM};
  `}
  font-size: 14px;
  padding-bottom: 2px;
`;