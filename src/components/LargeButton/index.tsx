import { FC, Fragment } from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";

import { Button, ButtonText } from "./styles";

import { ButtonColorProp } from "./styles";
import { useTheme } from "styled-components/native";
import { SvgProps } from "react-native-svg";

type Props = ButtonColorProp & TouchableOpacityProps & {
  textButton: string;
  isLoading?: boolean;
  status?: "active" | "inactive";
  Icon?: FC<SvgProps>;
}

export function LargeButton({ textButton, primary = "blue", isLoading, status, onPress, Icon, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Button 
      primary={primary} 
      status={status} 
      disabled={status === "inactive" ? true : false} 
      {...rest}>
      { isLoading ? 
        <ActivityIndicator color={theme.COLORS.WHITE[100]} />
      :
        <Fragment>
          <ButtonText primary={primary} status={status}>
            {textButton}
          </ButtonText>

          { Icon &&
            <Icon height={14} width={14} />
          }
        </Fragment>
      }
    </Button>
  );
}