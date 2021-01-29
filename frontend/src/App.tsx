import React, { useState } from "react";
import { DivStyled } from "./styles";
import { Button } from "./components/Button/";
import { TextArea } from "./components/TextArea";

function App() {
  const [color, setColor] = useState("");

  return (
    <DivStyled>
      <Button id="1" background="red" funcao={setColor} color={color} />
      <Button id="2" background="green" funcao={setColor} color={color} />
      <Button id="3" background="blue" funcao={setColor} color={color} />
      {/* <TextArea placeholder="Digite aqui!" funcao={setTexto} /> */}
    </DivStyled>
  );
}

export default App;
