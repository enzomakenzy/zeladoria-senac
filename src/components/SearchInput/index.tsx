import { TextInputProps } from "react-native";
import { Input, InputContainer, SearchIcon } from "./styles";
import { useTheme } from "styled-components/native";

export function SearchInput({ ...rest }: TextInputProps) {
  return (
    <InputContainer>
      <Input {...rest} />
      <SearchIcon />
    </InputContainer>
  )
}