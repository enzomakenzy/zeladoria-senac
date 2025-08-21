import styled, { css } from "styled-components/native";

export const Button = styled.Pressable`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 16px;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  border-radius: 50px;
`;  

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE.TRANSPARENCE_100};
    font-family: ${theme.FONTS.SEMI_BOLD};
  `}
  font-size: 18px;
`;
