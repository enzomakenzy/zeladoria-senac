import styled, { css } from "styled-components/native";
import FilterIcon from "@assets/filter.svg";

type PressedProp = {
  pressed: boolean;
}

export const Button = styled.Pressable<PressedProp>`
  padding: 5px;
  border-radius: 6px;
  align-items: center;
  margin: 0px 2px;
  justify-content: center;
  background-color: ${({ theme, pressed }) => (
    pressed ? 
    theme.COLORS.BLUE[200]
    :
    theme.COLORS.WHITE[200]
  )};
`;

export const FilterName = styled.Text<PressedProp>`
  ${({ theme, pressed }) => css`
    color: ${pressed ? theme.COLORS.WHITE[100] : theme.COLORS.BLUE[200]};
    font-family: ${theme.FONTS.SEMI_BOLD};
  `}
  font-size: 14px;
  padding: 2px 4px;
`; 

export const Icon = styled(FilterIcon).attrs<PressedProp>(({ theme, pressed }) => ({
  fill: pressed ? theme.COLORS.WHITE[100] : theme.COLORS.BLUE[200],
  height: 26,
  width: 50
}))``;

