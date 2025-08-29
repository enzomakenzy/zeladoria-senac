import { useState } from "react";
import { Button, FilterName, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  contentType?: "name" | "icon";
  isActive?: boolean 
  name?: string;
}

export function FilterButton({ contentType = "name", name, isActive = false, ...rest }: Props) {
  return (
    <Button
      {...rest}
      pressed={isActive}
    >
      { name ? 
        <FilterName pressed={isActive}>{name}</FilterName>
        :
        <Icon pressed={isActive} />
      }
    </Button>
  );
}