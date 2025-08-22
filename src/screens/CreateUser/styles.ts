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
  padding: 15px 15px 0px 15px;
`;

export const ScreenTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.SEMI_BOLD};
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
  `}
  font-size: 25px;
  margin-bottom: 12px;
`; 

export const FormContainer = styled.View`
  gap: 10px;
  margin-bottom: 30px;
`;

export const ButtonsContainer = styled.View`
  gap: 10px;
`;

// modal styles

export const ModalContentContainer = styled.View`
  gap: 10px;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

export const ModalCreateRoomTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.SEMI_BOLD};
    color: ${theme.COLORS.BLUE};
  `}
  font-size: 25px;
  text-align: center;
  margin: auto 0;
`;