import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

import Circle from "@assets/circle.svg";
import Cancel from "@assets/cancel.svg";
import Camera from "@assets/camera.svg";

type RoomProps = {
  status?: boolean;
  textStyle?: "regular" | "semibold";
  textColor?: "black" | "gray";
}

export const Container = styled(SafeAreaView).attrs({
  edges: ["right", "left", "top"]
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE[100]};
`;

export const Main = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
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
  ${({ theme, textStyle = "regular", textColor = "black" }) => css`
    font-family: ${textStyle === "regular" ? theme.FONTS.REGULAR : theme.FONTS.SEMI_BOLD};
    color: ${textColor === "gray" ? theme.COLORS.GRAY[100] : theme.COLORS.BLACK.TRANSPARENCE_100};
  `}
  font-size: 16px;
`;

export const StatusRoomContainer = styled.View`
  flex-direction: row;
  gap: 5px;
`;

// export const StatusRoomText = styled.Text<RoomProps>`
//   ${({ theme, status }) => css`
//     font-family: ${theme.FONTS.REGULAR};
//     color: ${status ? theme.COLORS.GREEN : theme.COLORS.ORANGE.MAIN};
//   `}
//   font-size: 16px;
// `

// export const StatusRoomIcon = styled(Circle)<RoomProps>`
//   background-color: ${({ theme, status }) => status ? theme.COLORS.GREEN : theme.COLORS.ORANGE.MAIN};
// `;

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

export const CleanRoomFormContainer = styled.View`
  gap: 7px;
  margin-bottom: 60px;
`;

export const CleanFieldContainer = styled.View`
  gap: 4px;
`;

export const CleanObservationsInput = styled.TextInput.attrs({
  multiline: true,
  textAlignVertical: "top"
})`
  ${({ theme }) => css`
    border-color: ${theme.COLORS.BLACK.TRANSPARENCE_6};
    font-family: ${theme.FONTS.REGULAR};
    background-color: ${theme.COLORS.WHITE[200]};
  `}
  height: 100px;
  width: 100%;
  border-width: 1px;
  border-radius: 6px;
  padding: 5px 8px;
`; 

export const CleanSelectedImagesArea = styled.View<{ error: boolean }>`
  ${({ theme, error }) => css`
    background-color: ${theme.COLORS.WHITE[200]};
    border-color: ${error ? theme.COLORS.RED : theme.COLORS.BLACK.TRANSPARENCE_6};
  `}
  width: 100%;
  height: 140px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-bottom: 16px;
`;

export const CameraIcon = styled(Camera).attrs(({ theme }) => ({
  height: 30,
  width: 30,
  fill: theme.COLORS.GRAY[100]
}))``;

export const ErrorText = styled.Text<{ error: boolean }>`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED};
    font-family: ${theme.FONTS.REGULAR};
  `}
  font-size: 10px;
`;
