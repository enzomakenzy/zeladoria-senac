import { TextInputProps } from "react-native";
import { InputFormContainer, InputNameText, Input } from "./styles" 

type Props = TextInputProps & {
  inputName: string;
  inputInfo?: string;
}

export function FormInput({ inputName, inputInfo, ...rest }: Props) {
  return (
    <InputFormContainer>
      <InputNameText>{inputName}</InputNameText>

      <Input 
        {...rest}
        value={inputInfo} 
      />
    </InputFormContainer>
  );
}