import styled, { css } from "styled-components/native";
import Search from "@assets/search.svg";
import { SeachInputProps } from ".";

export const InputContainer = styled.View<SeachInputProps>`
  background-color: ${({ theme }) => theme.COLORS.BLACK.TRANSPARENCE_4};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  flex: ${({ flex }) => flex ? 1 : "none"};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholder: "Nome da sala",
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
  fill: theme.COLORS.BLUE
}))`
  margin-right: 12px;
`;