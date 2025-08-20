import styled, { css } from "styled-components/native";
import FilterIcon from "@assets/filter.svg";

type PressedProp = {
  pressed: boolean;
}

export const Button = styled.Pressable<PressedProp>`
  padding: 5px;
  height: 38px;
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

export const FilterName = styled.Text<PressedProp>`
  ${({ theme, pressed }) => css`
    color: ${pressed ? theme.COLORS.WHITE.TRANSPARENCE_100 : theme.COLORS.BLUE};
    font-family: ${theme.FONTS.SEMI_BOLD};
  `}
  font-size: 16px;
  padding: 2px 4px;
`; 

export const Icon = styled(FilterIcon).attrs<PressedProp>(({ theme, pressed }) => ({
  fill: pressed ? theme.COLORS.WHITE.TRANSPARENCE_100 : theme.COLORS.BLUE,
  height: 26,
  width: 50
}))``;

