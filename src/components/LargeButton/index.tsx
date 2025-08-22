import { TouchableOpacityProps } from "react-native";

import { Button, ButtonText } from "./styles";

import { ButtonColorProp } from "./styles";

type Props = ButtonColorProp & TouchableOpacityProps & {
  textButton: string
}

export function LargeButton({ textButton, primary = "blue", ...rest }: Props) {
  return (
    <Button primary={primary} {...rest}>
      <ButtonText>
        {textButton}
      </ButtonText>
    </Button>
  );
}