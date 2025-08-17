import { TouchableOpacityProps } from "react-native";

import { Button, ButtonText } from "./styles";

import { ButtonColorProp } from "./styles";

type Props = ButtonColorProp & TouchableOpacityProps & {
  textButton: string
}

export function LargeButton({ textButton, primary = false, ...rest }: Props) {
  return (
    <Button primary={primary} {...rest}>
      <ButtonText>
        {textButton}
      </ButtonText>
    </Button>
  );
}