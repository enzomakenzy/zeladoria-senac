import { ActivityIndicator, TouchableOpacityProps } from "react-native";

import { Button, ButtonText } from "./styles";

import { ButtonColorProp } from "./styles";
import { useTheme } from "styled-components/native";

type Props = ButtonColorProp & TouchableOpacityProps & {
  textButton: string;
  isLoading?: boolean;
}

export function LargeButton({ textButton, primary = "blue", isLoading, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Button primary={primary} {...rest}>
      { isLoading ? 
        <ActivityIndicator color={theme.COLORS.WHITE.TRANSPARENCE_100} />
      :
        <ButtonText>
          {textButton}
        </ButtonText>
      }
    </Button>
  );
}