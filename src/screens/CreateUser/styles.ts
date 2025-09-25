import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";

export const Container = styled(SafeAreaView).attrs({
  edges: ["right", "left", "top"]
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE[100]};
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE[100]};
  padding: 15px 15px 0px 15px;
`;

export const FormContainer = styled.View`
  gap: 10px;
  margin-bottom: 30px;
`;

export const ButtonsContainer = styled.View`
  gap: 10px;
`;

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-left: auto;
  margin-bottom: 20px;
`;

export const CheckBoxText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.BLUE[200]};
  `}
  font-size: 18px;
`

export const StyledCheckBox = styled(Checkbox).attrs(({ theme }) => ({
  color: theme.COLORS.BLUE[200]
}))``;

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
    color: ${theme.COLORS.BLUE[200]};
  `}
  font-size: 25px;
  text-align: center;
  margin: auto 0;
`;