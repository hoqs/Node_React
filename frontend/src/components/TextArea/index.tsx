import React, { InputHTMLAttributes } from "react";
import { StyledTextArea } from "./styles";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  funcao?: any;
  texto?: string;
}

export const TextArea: React.FC<Input> = ({ placeholder, funcao }) => {
  return (
    <StyledTextArea
      placeholder={placeholder}
      onChange={(event) => funcao(event.target.value)}
    ></StyledTextArea>
  );
};
