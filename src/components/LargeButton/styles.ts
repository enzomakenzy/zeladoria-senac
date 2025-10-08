import styled, { css } from "styled-components/native";

export type ButtonColorProp = {
  primary?: "blue" | "red" | "orange";
  status?: "active" | "inactive";
}

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})<ButtonColorProp>`
  padding: 8px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  ${({ theme, primary, status }) => css`
    border-color: ${
      status === "inactive" ? theme.COLORS.GRAY[100]
      : primary === "blue" ? theme.COLORS.BLUE[200] 
      : primary === "red" ? theme.COLORS.RED 
      : theme.COLORS.ORANGE.MAIN
    };
    background-color: ${
      status === "inactive" ? theme.COLORS.GRAY[100]
      : primary === "blue" ? theme.COLORS.BLUE[200] 
      : primary === "red" ? theme.COLORS.WHITE[100] 
      : theme.COLORS.ORANGE.MAIN
    };
  `}
`;

export const ButtonText = styled.Text<ButtonColorProp>`
  ${({ theme, primary, status }) => css`
    color: ${
      status === "inactive" ? theme.COLORS.GRAY[600] 
      : primary === "red" ? theme.COLORS.RED 
      : theme.COLORS.WHITE[100]
    };
    font-family: ${theme.FONTS.REGULAR};
  `}
  font-size: 16px;
`;