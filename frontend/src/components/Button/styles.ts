import styled from "styled-components";

interface Botao {
  backgroundColor: string;
}

export const StyledButton = styled.button<Botao>`
  border-radius: 15px;
  height: 50px;
  width: 50%;
  margin-left: 50px;
  margin-top: 50px;
  outline: none;
  align-self: center;
  display: flex;
  background-color: ${(p) => p.backgroundColor};
  :hover {
    cursor: pointer;
  }
`;
