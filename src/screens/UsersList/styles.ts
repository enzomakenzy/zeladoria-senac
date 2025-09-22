import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView).attrs({
  edges: ["right", "left", "top"]
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE.TRANSPARENCE_100}; 
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE.TRANSPARENCE_100};
  padding: 15px 15px 0;
`;
