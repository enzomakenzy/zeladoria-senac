import styled, { css } from "styled-components/native";

export const CardContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLACK.TRANSPARENCE_4};
  padding: 12px 18px;
  border-radius: 6px;
  margin-bottom: 12px;
`;

export const RoomInfoContainer = styled.View`
  margin-bottom: 16px;
`;

export const RoomName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE};
    font-family: ${theme.FONTS.SEMI_BOLD};
  `}
  font-size: 22px;
  margin-bottom: 5px;
`;

export const RoomInfo = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
    font-family: ${theme.FONTS.REGULAR};
  `}
  font-size: 16px;
`;

export const ButtonDetails = styled.TouchableOpacity.attrs({
  activeOpacity: 0.55
})`
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  padding: 8px;
  border-radius: 6px;
  align-items: center;
`;  

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE.TRANSPARENCE_100};
    font-family: ${theme.FONTS.REGULAR};
  `}
`