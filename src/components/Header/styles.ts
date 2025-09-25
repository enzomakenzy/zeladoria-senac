import styled, { css } from "styled-components/native";

export const HeaderContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE[100]};
    border-color: ${theme.COLORS.BLACK.TRANSPARENCE_6};
  `}
  width: 100%;
  padding: 1px 15px;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  border-bottom-width: 1px;
  height: 56px;
  margin-bottom: 5px;
`;

export const ScreenName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
    font-family: ${theme.FONTS.BOLD};
  `}
  font-size: 22px;
  flex: 1;
  text-align: center;
`;

export const ArrowButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 60px;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;