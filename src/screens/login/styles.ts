import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  padding: 30px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.SEMI_BOLD};
    color: ${theme.COLORS.BLUE};
  `}
  font-size: 26px;
  text-align: center;
`;

export const DescriptionText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.BLUE};
  `}
  font-size: 20px;
  margin-bottom: 25px;
  text-align: center;
`;

export const FormContainer = styled.View`
  gap: 10px;
  margin-bottom: 30px;
  width: 100%;
`;
