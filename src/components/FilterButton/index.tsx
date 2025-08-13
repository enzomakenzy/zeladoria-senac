import { useState } from "react";
import { Button, Icon } from "./styles";

export function FilterButton() {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  function handlePressButton() {
    isPressed ? setIsPressed(false) : setIsPressed(true);
  }

  return (
    <Button
      onPress={handlePressButton}
      pressed={isPressed}
    >
      <Icon pressed={isPressed} />
    </Button>
  );
}