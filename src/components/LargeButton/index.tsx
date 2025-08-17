import { Button, ButtonText } from "./styles";

import { ButtonColorProp } from "./styles";

type Props = ButtonColorProp & {
  textButton: string
}

export function LargeButton({ textButton, primary = false }: Props) {
  return (
    <Button primary={primary}>
      <ButtonText>
        {textButton}
      </ButtonText>
    </Button>
  );
}