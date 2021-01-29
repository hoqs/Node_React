import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface Botao extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  background: string;
  color: string;
  funcao: any;
}

export const Button: React.FC<Botao> = ({ id, background, funcao, color }) => {
  if (id === "1") {
    return (
      <div>
        <StyledButton
          onClick={() => {
            funcao(background);
          }}
          backgroundColor={color}
        ></StyledButton>
      </div>
    );
  } else if (id === "2") {
    return (
      <div>
        <StyledButton
          onClick={() => {
            funcao(background);
          }}
          backgroundColor={color}
        ></StyledButton>
      </div>
    );
  } else
    return (
      <div>
        <StyledButton
          onClick={() => {
            funcao(background);
          }}
          backgroundColor={color}
        ></StyledButton>
      </div>
    );
};
