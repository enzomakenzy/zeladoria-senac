import styled, { css } from "styled-components/native";

export type ButtonColorProp = {
  primary?: boolean;
}

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})<ButtonColorProp>`
  background-color: ${({ theme, primary }) => primary ? theme.COLORS.BLUE : theme.COLORS.RED };
  padding: 8px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE.TRANSPARENCE_100};
    font-family: ${theme.FONTS.REGULAR};
  `}
  font-size: 16px;
`;