import { useTheme } from "styled-components/native";
import { Button, FilterName, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  contentType?: "name" | "icon";
  isActive?: boolean;
  name?: string;
}

export function FilterButton({ contentType = "name", name, isActive = false, ...rest }: Props) {
  const theme = useTheme();  
  
  return (
    <Button
      {...rest}
      pressed={isActive}
      style={{ boxShadow: `0px 0px 2px ${theme.COLORS.BLACK.TRANSPARENCE_20}` }}
    >
      { name ? 
        <FilterName pressed={isActive}>{name}</FilterName>
        :
        <Icon pressed={isActive} />
      }
    </Button>
  );
}