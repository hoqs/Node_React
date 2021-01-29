import styled from "styled-components";

interface Input {
  placeholder: string;
}

export const StyledTextArea = styled.input<Input>`
  background-color: rgb(243, 243, 243);
  margin-top: 2rem;
  font-size: 16px;
  padding: 0.8rem 1.1rem;
  border-radius: 2rem;
  height: 10px;
  width: 300px;
  outline: none;
  margin-left: 50px;
  ::placeholder {
    ${(p) => p.placeholder};
  }
`;
