import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

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
  justify-content: space-between;
`;

export const ContentContainer = styled.View``;

export const ScreenTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.SEMI_BOLD};
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
  `}
  font-size: 25px;
  margin-bottom: 12px;
`; 

export const ImgNameContainer = styled.View`
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const UserNameText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.MEDIUM};
    color: ${theme.COLORS.BLUE};
  `}
  font-size: 20px;
  width: 50%;
  text-align: center;
`;

export const InputInfoContainer = styled.View`
  gap: 10px;
  margin-bottom: 24px;
`;

// Modal Styles

export const ModalChangePasswordTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.SEMI_BOLD};
    color: ${theme.COLORS.BLUE};
  `}
  font-size: 20px;
  text-align: center;
`;

export const ModalContentContainer = styled.View`
  gap: 5px;
`;