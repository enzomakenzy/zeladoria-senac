import { InputFormContainer, InputNameText, Input } from "./styles" 

type Props = {
  inputName: string;
  inputInfo: string;
}

export function FormInput({ inputName, inputInfo }: Props) {
  return (
    <InputFormContainer>
      <InputNameText>{inputName}</InputNameText>

      <Input 
        value={inputInfo} 
        editable={false}
      />
    </InputFormContainer>
  );
}