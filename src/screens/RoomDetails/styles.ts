import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";
import Circle from "@assets/circle.svg";

type RoomProps = {
  status?: boolean;
  textStyle?: "regular" | "medium";
}

export const Container = styled(SafeAreaView).attrs({
  edges: ["right", "left", "top"]
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE.TRANSPARENCE_100};
  padding: 15px;
`;

export const ScreenTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.SEMI_BOLD};
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
  `}
  font-size: 25px;
  margin-bottom: 12px;
`; 

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.BLACK.TRANSPARENCE_6};
`;

export const RoomNameText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.MEDIUM};
    color: ${theme.COLORS.BLUE};
  `};
  font-size: 22px;
  margin: 18px 0px 10px; 
`;

export const InfoRoomContainer = styled.View`
  gap: 8px;
  margin-bottom: 22px;
`;

export const ItemInfoContainer = styled.View`
  flex-direction: row;
  gap: 7px;
`;

export const InfoRoomText = styled.Text<RoomProps>`
  ${({ theme, textStyle = "regular" }) => css`
    font-family: ${textStyle === "regular" ? theme.FONTS.REGULAR : theme.FONTS.MEDIUM};
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
  `}
  font-size: 18px;
`;

export const StatusRoomContainer = styled.View`
  flex-direction: row;
  gap: 5px;
`;

export const StatusRoomText = styled.Text<RoomProps>`
  ${({ theme, status }) => css`
    font-family: ${theme.FONTS.REGULAR};
    color: ${status ? theme.COLORS.GREEN : theme.COLORS.ORANGE};
  `}
  font-size: 16px;
`

export const StatusRoomIcon = styled(Circle)<RoomProps>`
  background-color: ${({ theme, status }) => status ? theme.COLORS.GREEN : theme.COLORS.ORANGE};
`;

// Colocar Modal Visible 

export const ModalTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE};
    font-family: ${theme.FONTS.SEMI_BOLD};
  `}
  font-size: 18px;
  text-align: center; 
`;

export const ModalInfoContainer = styled.View`
  margin-bottom: 20px;
`;

export const ModalButtonsContainer = styled.View`
  gap: 12px;
`;