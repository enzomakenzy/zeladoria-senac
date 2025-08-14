import styled, { css } from "styled-components/native";

export const Input = styled.TextInput`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
    font-family: ${theme.FONTS.REGULAR};
    background-color: ${theme.COLORS.BLACK.TRANSPARENCE_4};
  `}
  width: 100%;
  padding: 8px;
  flex-shrink: 1;
  border-radius: 6px;
`;