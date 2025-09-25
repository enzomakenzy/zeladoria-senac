import { FC } from "react";
import { IconContainer } from "./styles";
import { SvgProps } from "react-native-svg";

import { useTheme } from "styled-components/native";

interface Props {
  Icon: FC<SvgProps>;
  FocusedIcon: FC<SvgProps>;
  focused: boolean;
}

export function TabIcon({ Icon, FocusedIcon, focused}: Props) {
  const theme = useTheme();
  
  return (
    <IconContainer focused={focused}>
      {
        focused ? 
        <FocusedIcon 
          fill={theme.COLORS.BLUE}
          height={22}
          width={22}
        />
        :
        <Icon 
          fill={theme.COLORS.WHITE.TRANSPARENCE_100} 
          height={27}
          width={27}
        />
      }
    </IconContainer>
  );
}