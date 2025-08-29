import styled, { css } from "styled-components/native";

export const CardContainer = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BLACK.TRANSPARENCE_4};
  border-radius: 6px;
  align-items: center;
`;

export const UserInfoContainer = styled.View`
  gap: 6px;
`;

export const UserNameText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE};
    font-family: ${theme.FONTS.REGULAR};
  `}
  font-size: 18px;
`;

export const UserTypeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE};
    font-family: ${theme.FONTS.REGULAR};
  `}
  font-size: 14px;
`;