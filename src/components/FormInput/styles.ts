import styled, { css } from "styled-components/native";

import UserIcon from "@assets/user.svg";
import LockIcon from "@assets/lock.svg";
 
type ErrorInputProp = {
  error: boolean;
}

export const InputFormContainer = styled.View`
  gap: 4px;
`;

export const InputNameText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.BLUE};
  `}
  font-size: 14px;
`;

export const InputIconContainer = styled.View<ErrorInputProp>`
  flex-direction: row;
  gap: 5px;
    ${({ theme, error }) => css`
    background-color: ${theme.COLORS.BLACK.TRANSPARENCE_4};
    border-color: ${error ? theme.COLORS.RED : theme.COLORS.BLACK.TRANSPARENCE_4};
  `}
  border-width: 1px;
  border-radius: 6px;
  padding: 2px 8px;
  align-items: center;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.BLACK.TRANSPARENCE_30
}))<ErrorInputProp>`
  ${({ theme, editable = true, error }) => css`
  color: ${editable ? theme.COLORS.BLUE : theme.COLORS.BLACK.TRANSPARENCE_39};
  font-family: ${theme.FONTS.REGULAR};
  `}
  width: 88%;
  font-size: 16px;
  align-items: center;
`;

export const ErrorInputText = styled.Text<ErrorInputProp>`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED};
    font-family: ${theme.FONTS.REGULAR};
  `}
  font-size: 12px;
`;

export const StyledUserIcon = styled(UserIcon).attrs<ErrorInputProp>(({ theme, error }) => ({
  fill: error ? theme.COLORS.RED : theme.COLORS.BLUE
}))``;

export const StyledLockIcon = styled(LockIcon).attrs<ErrorInputProp>(({ theme, error }) => ({
  fill: error ? theme.COLORS.RED : theme.COLORS.BLUE
}))``;