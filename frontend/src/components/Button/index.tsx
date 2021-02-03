import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface Botao extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  funcao: any;
}

export const Button: React.FC<Botao> = ({ id, funcao }) => {
  return (
    <div>
      <StyledButton
        onClick={() => {
          funcao();
        }}
      ></StyledButton>
    </div>
  );
};
