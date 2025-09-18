import styled from "styled-components/native";

export const IconContainer = styled.View<{ focused: boolean }>`
  background-color: ${({ theme, focused }) => focused ? theme.COLORS.WHITE.TRANSPARENCE_100 : theme.COLORS.BLUE};
  padding: 6px;
`;