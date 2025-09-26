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
    color: ${theme.COLORS.BLUE[200]};
  `}
  font-size: 14px;
`;

export const InputIconContainer = styled.View<ErrorInputProp>`
  flex-direction: row;
  gap: 5px;
    ${({ theme, error }) => css`
    background-color: ${theme.COLORS.WHITE[200]};
    border-color: ${error ? theme.COLORS.RED : theme.COLORS.BLACK.TRANSPARENCE_6};
  `}
  border-width: 1px;
  border-radius: 6px;
  align-items: center;
  padding-left: 10px;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.BLACK.TRANSPARENCE_30
}))<ErrorInputProp>`
  ${({ theme, editable = true }) => css`
    color: ${editable ? theme.COLORS.BLUE[200] : theme.COLORS.BLACK.TRANSPARENCE_30};
    font-family: ${theme.FONTS.REGULAR};
  `}
  width: 88%;
  padding: 8px 12px 8px 0px;
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
  fill: error ? theme.COLORS.RED : theme.COLORS.BLUE[200],
  height: 22,
  width: 22
}))`
  margin-right: 2px;
`;

export const StyledLockIcon = styled(LockIcon).attrs<ErrorInputProp>(({ theme, error }) => ({
  fill: error ? theme.COLORS.RED : theme.COLORS.BLUE[200],
  height: 22,
  width: 22
}))`
  margin-right: 2px
`;