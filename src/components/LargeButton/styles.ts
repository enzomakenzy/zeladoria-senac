import styled, { css } from "styled-components/native";

export type ButtonColorProp = {
  primary?: "blue" | "red" | "orange";
}

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})<ButtonColorProp>`
  padding: 8px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, primary }) => (primary === "blue" ? theme.COLORS.BLUE 
    : 
    primary === "red" ? theme.COLORS.RED : theme.COLORS.ORANGE
  )};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE.TRANSPARENCE_100};
    font-family: ${theme.FONTS.REGULAR};
  `}
  font-size: 16px;
`;