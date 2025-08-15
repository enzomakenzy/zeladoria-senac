import styled, { css } from "styled-components/native";
import Search from "@assets/search.svg";

export const InputContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLACK.TRANSPARENCE_4};
  flex-direction: row;
  width: 100%;
  align-items: center;
  flex-shrink: 1;
  border-radius: 6px;
  `;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholder: "Nome da sala",
  placeholderTextColor: theme.COLORS.BLACK.TRANSPARENCE_30
}))`
  ${({ theme }) => css`
  color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
  font-family: ${theme.FONTS.REGULAR};
  `}
  flex: 1;
  padding: 8px 12px;
  font-size: 16px;
`;

export const SearchIcon = styled(Search).attrs(({ theme }) => ({
  fill: theme.COLORS.BLUE
}))`
  margin-right: 12px;
`;