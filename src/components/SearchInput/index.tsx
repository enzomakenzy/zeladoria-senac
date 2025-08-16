import { Input, InputContainer, SearchIcon } from "./styles";

export type SeachInputProps = {
  flex?: boolean
}

export function SearchInput({ flex }: SeachInputProps) {
  return (
    <InputContainer flex={flex}>
      <Input />
      <SearchIcon />
    </InputContainer>
  )
}