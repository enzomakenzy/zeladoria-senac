import styled, { css } from "styled-components/native";
import Search from "@assets/search.svg";
import { SeachInputProps } from ".";

export const InputContainer = styled.View<SeachInputProps>`
  background-color: ${({ theme }) => theme.COLORS.WHITE[200]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  flex: ${({ flex }) => flex ? 1 : "none"};
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BLACK.TRANSPARENCE_6};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.BLACK.TRANSPARENCE_30
}))`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
    font-family: ${theme.FONTS.REGULAR};
  `}
  padding: 8px 12px;
  font-size: 16px;
  width: 85%;
`;

export const SearchIcon = styled(Search).attrs(({ theme }) => ({
  fill: theme.COLORS.BLUE[200]
}))`
  margin-right: 12px;
`;