import { useState } from "react";
import { Button, FilterName, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  contentType?: "name" | "icon";
  isActive?: boolean 
  name?: string;
}

export function FilterButton({ contentType = "name", name, isActive, ...rest }: Props) {
  const [isPressed, setIsPressed] = useState(false);
  
  function handlePressButton() {
    isPressed ? setIsPressed(false) : setIsPressed(true);
  }

  return (
    <Button
      {...rest}
      pressed={isPressed}
    >
      { name ? 
        <FilterName pressed={isPressed}>{name}</FilterName>
        :
        <Icon pressed={isPressed} />
      }
    </Button>
  );
}