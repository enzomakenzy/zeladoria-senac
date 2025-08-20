import { useState } from "react";
import { Button, FilterName, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  contentType?: "name" | "icon";
  isPressed: boolean 
  name?: string;
}

export function FilterButton({ contentType = "name", name, isPressed, ...rest }: Props) {
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