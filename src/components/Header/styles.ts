import styled, { css } from "styled-components/native";

export const HeaderContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE.TRANSPARENCE_100};
    border-color: ${theme.COLORS.BLACK.TRANSPARENCE_6};
  `}
  width: 100%;
  padding: 1px 15px;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  border-bottom-width: 2px;
`;

export const NotificationButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  padding: 10px;
  flex: 1;
  align-items: flex-end;
`;