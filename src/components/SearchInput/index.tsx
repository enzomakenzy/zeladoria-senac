import { TextInputProps } from "react-native";
import { Input, InputContainer, SearchIcon } from "./styles";
import { useTheme } from "styled-components/native";

export type SeachInputProps = TextInputProps & {
  flex?: boolean
}

export function SearchInput({ flex, ...rest }: SeachInputProps) {
  const theme = useTheme();
  
  return (
    <InputContainer 
      flex={flex}
      style={{ boxShadow: `0px 0px 2px ${theme.COLORS.BLACK.TRANSPARENCE_20}` }}
    >
      <Input {...rest} />
      <SearchIcon />
    </InputContainer>
  )
}