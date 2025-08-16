import styled from "styled-components/native";
import FilterIcon from "@assets/filter.svg";

type PressedProp = {
  pressed: boolean;
}

export const Button = styled.Pressable<PressedProp>`
  padding: 5px;
  width: 65px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, pressed }) => (
    pressed ? 
    theme.COLORS.BLUE
    :
    theme.COLORS.BLACK.TRANSPARENCE_4
  )};
`;

export const Icon = styled(FilterIcon).attrs<PressedProp>(({ theme, pressed }) => ({
  fill: pressed ? theme.COLORS.WHITE.TRANSPARENCE_100 : theme.COLORS.BLUE,
  height: 26
}))``;
