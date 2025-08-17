import styled, { css } from "styled-components/native";

export const InputFormContainer = styled.View`
  gap: 5px;
`;

export const InputNameText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.BLUE};
  `}
  font-size: 14px;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholder: "Nome da sala",
  placeholderTextColor: theme.COLORS.BLACK.TRANSPARENCE_30
}))`
  ${({ theme, editable }) => css`
    color: ${editable ? theme.COLORS.BLUE : theme.COLORS.BLACK.TRANSPARENCE_39};
    font-family: ${theme.FONTS.REGULAR};
    background-color: ${theme.COLORS.BLACK.TRANSPARENCE_4};
  `}
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 6px;
`;