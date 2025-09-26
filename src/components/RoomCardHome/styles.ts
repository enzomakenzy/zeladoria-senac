import styled, { css } from "styled-components/native";

import Check from "@assets/check.svg";
import Schedule from "@assets/schedule.svg";
import Pending from "@assets/pending.svg";
import Dirty from "@assets/pending.svg";

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
    color: ${
        roomStatus == "Limpa" ? theme.COLORS.GREEN 
      : roomStatus === "Em Limpeza" ? theme.COLORS.BLUE[100] 
      : roomStatus === "Limpeza Pendente" ? theme.COLORS.ORANGE.MAIN : theme.COLORS.RED
    };
    font-size: ${theme.FONTS.MEDIUM};
  `}
  font-size: 14px;
`;

export const CheckIcon = styled(Check).attrs(({ theme }) => ({
  fill: theme.COLORS.GREEN,
  height: 16,
  width: 16
}))``;

export const ScheduleIcon = styled(Schedule).attrs(({ theme }) => ({
  fill: theme.COLORS.BLUE[100],
  height: 16,
  width: 16
}))``;

export const PendingIcon = styled(Check).attrs(({ theme }) => ({
  fill: theme.COLORS.ORANGE.MAIN,
  height: 16,
  width: 16
}))``;

export const DirtyIcon = styled(Dirty).attrs(({ theme }) => ({
  fill: theme.COLORS.RED,
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