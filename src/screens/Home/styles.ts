import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

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

export const OptionsRoomsContainer = styled.View`
  gap: 12px;
  margin-bottom: 20px;
`

export const SearchFilterContainer = styled.View` 
  flex-direction: row;
  gap: 15px;
  border-radius: 6px;
`; 

export const FiltersContainer = styled.View`
  gap: 10px;
`;

export const FilterText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE};
    font-family: ${theme.FONTS.REGULAR};
  `}
  font-size: 16px;
  margin-left: 10px;
`;

export const ListFilterContainer = styled.View`
  flex-direction: row;
  gap: 10px;
`

export const Line = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLACK.TRANSPARENCE_6};
  height: 1px;
`;

export const LocationFilterList = styled.FlatList`
  flex-direction: row;
  gap: 10px;
`