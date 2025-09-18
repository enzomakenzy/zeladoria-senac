import { FC } from "react";
import { IconContainer } from "./styles";
import { SvgProps } from "react-native-svg";

import { useTheme } from "styled-components/native";

interface Props {
  Icon: FC<SvgProps>;
  focused: boolean;
}

export function TabIcon({ Icon, focused}: Props) {
  const theme = useTheme();
  
  return (
    <IconContainer focused={focused}>
      <Icon 
        fill={focused ? theme.COLORS.BLUE : theme.COLORS.WHITE.TRANSPARENCE_100} 
        height={26}
        width={26}
      />
    </IconContainer>
  );
}