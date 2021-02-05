import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface Botao extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  funcao: any;
  text: string;
}

export const Button: React.FC<Botao> = ({ id, funcao, text }) => {
  return (
    <div>
      <StyledButton
        onClick={() => {
          funcao();
        }}
      >
        {text}
      </StyledButton>
    </div>
  );
};
