import styled, { css } from "styled-components/native";
import CircleSvg from "@assets/circle.svg";

type StatusProp = {
  roomStatus: boolean
} 

export const CardContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.58
})`
  background-color: ${({ theme }) => theme.COLORS.BLACK.TRANSPARENCE_4};
  padding: 12px 18px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 6px;
  margin-bottom: 14px;
`;

export const InfoRoomContainer = styled.View``;

export const RoomName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE};
    font-family: ${theme.FONTS.SEMI_BOLD};
  `}
  font-size: 22px;
  margin-bottom: 5px;
`;  

export const RoomInfo = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
    font-family: ${theme.FONTS.REGULAR};
  `}
  font-size: 16px;
`;

export const StatusRoomContainer = styled.View`
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
  gap: 4px;
`;

export const RoomStatus = styled.Text<StatusProp>`
  ${({ theme, roomStatus }) => css`
    color: ${roomStatus? theme.COLORS.GREEN : theme.COLORS.ORANGE};
    font-size: ${theme.FONTS.MEDIUM};
  `}
  font-size: 18px;
`;

export const CircleIcon = styled(CircleSvg).attrs<StatusProp>(({ theme, roomStatus }) => ({
  fill: roomStatus ? theme.COLORS.GREEN : theme.COLORS.ORANGE,
  height: 14,
  width: 14
}))``