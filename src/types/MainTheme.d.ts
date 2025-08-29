import "styled-components/native"

import MainTheme from "@themes/MainTheme"

declare module "styled-components/native" {
  type ThemeType = typeof MainTheme;

  export interface DefaultTheme extends ThemeType { };
}