import styled, { css } from "styled-components/native";
import Notification from "@assets/notification.svg";

export const HeaderContainer = styled.View`
  width: 100%;
  padding: 0px 15px 10px 15px ;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const TextContainer = styled.View`
  flex-direction: column;
  padding-top: 10px;
  flex: 1;
`;  

export const HiText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE.TRANSPARENCE_100};
    font-family: ${theme.FONTS.REGULAR};
  `}

  font-size: 17px;
`

export const StaffName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE.TRANSPARENCE_100};
    font-family: ${theme.FONTS.BOLD};
  `};
  
  font-size: 17px;
`

export const NotificationButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  padding: 10px;
`

export const NotificationIcon = styled(Notification).attrs(({ theme }) => ({
  fill: theme.COLORS.WHITE.TRANSPARENCE_100
}))``