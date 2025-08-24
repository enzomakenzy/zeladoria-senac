import { TextInputProps } from "react-native";

import { InputFormContainer, InputNameText, Input, ErrorInputText, InputIconContainer, StyledUserIcon, StyledLockIcon } from "./styles" 

type Props = TextInputProps & {
  inputName: string;
  errorMessage?: string;
  inputInfo?: string;
  icon?: "user" | "lock";
}

export function FormInput({ inputName, inputInfo, errorMessage, icon, ...rest }: Props) {
  const isInvalid = !!errorMessage;

  return (
    <InputFormContainer>
      <InputNameText>{inputName}</InputNameText>

      <InputIconContainer error={isInvalid}>
        {icon === "user" && <StyledUserIcon error={isInvalid} />}
        {icon === "lock" && <StyledLockIcon error={isInvalid} />}
      
        <Input 
          {...rest}
          error={isInvalid}
          value={inputInfo} 
        />
      </InputIconContainer>


      { 
        isInvalid &&
          <ErrorInputText error={isInvalid}>
            {errorMessage}
          </ErrorInputText>
      }
    </InputFormContainer>
  );
}