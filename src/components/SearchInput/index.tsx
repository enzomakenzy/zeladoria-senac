import { TextInputProps } from "react-native";
import { Input, InputContainer, SearchIcon } from "./styles";

type SeachInputProps = TextInputProps & {
  flex?: boolean
}

export function SearchInput({ flex, ...rest }: SeachInputProps) {
  return (
    <InputContainer flex={flex}>
      <Input {...rest} />
      <SearchIcon />
    </InputContainer>
  )
}