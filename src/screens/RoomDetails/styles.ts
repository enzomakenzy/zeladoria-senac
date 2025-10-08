import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

import Circle from "@assets/circle.svg";
import Cancel from "@assets/cancel.svg";

type RoomProps = {
  status?: boolean;
  textStyle?: "regular" | "semibold";
}

export const Container = styled(SafeAreaView).attrs({
  edges: ["right", "left", "top"]
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE[100]};
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE[100]};
  padding: 4px 15px;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.BLACK.TRANSPARENCE_6};
  /* margin-bottom: 3px; */
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.SEMI_BOLD};
    color: ${theme.COLORS.BLUE[200]};
  `};
  font-size: 20px;
`;

export const InfoRoomContainer = styled.View`
  gap: 8px;
  margin: 10px 0 22px;
`;

export const ItemInfoContainer = styled.View`
  flex-direction: row;
  gap: 7px;
`;

export const StyledText = styled.Text<RoomProps>`
  ${({ theme, textStyle = "regular" }) => css`
    font-family: ${textStyle === "regular" ? theme.FONTS.REGULAR : theme.FONTS.SEMI_BOLD};
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
  `}
  font-size: 16px;
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

// Clean Structure

export const CleanContainer = styled.View`
  margin: 25px 0px;
  gap: 4px;
  flex: 1;
`;  

export const CleanTitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CancelButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const CancelIcon = styled(Cancel).attrs(({ theme }) => ({
  fill: theme.COLORS.BLACK.TRANSPARENCE_100,
  height: 26,
  width: 26
}))``;

export const CleanRoomForm = styled.View`
  gap: 3px;
`;