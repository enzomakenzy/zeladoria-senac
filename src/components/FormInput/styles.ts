import styled, { css } from "styled-components/native";
 
type ErrorInputProp = {
  error: boolean;
}

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
  placeholderTextColor: theme.COLORS.BLACK.TRANSPARENCE_30
}))<ErrorInputProp>`
  ${({ theme, editable = true, error }) => css`
    color: ${editable ? theme.COLORS.BLUE : theme.COLORS.BLACK.TRANSPARENCE_39};
    font-family: ${theme.FONTS.REGULAR};
    background-color: ${theme.COLORS.BLACK.TRANSPARENCE_4};
    border-color: ${error ? theme.COLORS.RED : theme.COLORS.BLACK.TRANSPARENCE_4};
  `}
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 6px;
  border-width: 1px;
`;

export const ErrorInputText = styled.Text<ErrorInputProp>`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED};
    font-family: ${theme.FONTS.REGULAR};
  `}
  font-size: 12px;
`;