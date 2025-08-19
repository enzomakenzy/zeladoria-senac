import { TextInputProps } from "react-native";
import { InputFormContainer, InputNameText, Input, ErrorInputText } from "./styles" 

type Props = TextInputProps & {
  inputName: string;
  errorMessage?: string;
  inputInfo?: string;
}

export function FormInput({ inputName, inputInfo, errorMessage, ...rest }: Props) {
  const isInvalid = !!errorMessage;

  return (
    <InputFormContainer>
      <InputNameText>{inputName}</InputNameText>

      <Input 
        {...rest}
        error={isInvalid}
        value={inputInfo} 
      />

      { 
        isInvalid &&
          <ErrorInputText error={isInvalid}>
            {errorMessage}
          </ErrorInputText>
      }
    </InputFormContainer>
  );
}