import styled from "styled-components/native";

export const IconContainer = styled.View<{ focused: boolean }>`
  background-color: ${({ theme, focused }) => focused ? theme.COLORS.WHITE[100] : theme.COLORS.BLUE};
  padding: 4px;
  border-radius: 6px;
`;