import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

type ColorCleanRoomProp = {
  areGreen?: boolean;
}

export const Container = styled(SafeAreaView).attrs({
  edges: ["right", "left", "top"]
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE.TRANSPARENCE_100};
  padding: 15px 15px 0px 15px;
`;

export const ScreenTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.SEMI_BOLD};
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
  `}
  font-size: 25px;
  margin-bottom: 12px;
`; 

export const ModalContainer = styled.View`
  flex: 1;
  background-color: #00000079;
  justify-content: center;
  align-items: center;
`;

export const ModalDetailsContainer = styled.View`
  width: 90%;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE.TRANSPARENCE_100};
  border-radius: 6px;
  gap: 5px;
`;

export const ModalRoomNameTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.SEMI_BOLD};
    color: ${theme.COLORS.BLUE};
  `}
  font-size: 26px;
  text-align: center;
`;

export const ModalContentContainer = styled.View`
  gap: 5px;
`;

export const ModalCategoryText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.MEDIUM};
    color: ${theme.COLORS.BLACK.TRANSPARENCE_100};
  `}  
  font-size: 16px;
`

export const ModalInfoText = styled.Text<ColorCleanRoomProp>`
  ${({ theme, areGreen }) => css`
    font-family: ${areGreen ? theme.FONTS.MEDIUM : theme.FONTS.REGULAR};
    color: ${areGreen ? theme.COLORS.GREEN : theme.COLORS.BLACK.TRANSPARENCE_100};
  `}  
  font-size: 16px;
`

export const ModalCloseButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.55
})`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  padding: 5px;
  border-radius: 6px;
`

export const ModalCloseTextButton = styled.Text`
  ${({ theme }) => css`
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    color: ${theme.COLORS.WHITE.TRANSPARENCE_100};
  `}
  font-size: 16px;
  text-align: center;
`;