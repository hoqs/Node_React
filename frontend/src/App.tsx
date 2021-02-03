import React, { useState } from "react";
import { DivStyled } from "./styles";
import { Button } from "./components/Button/";
import { TextArea } from "./components/TextArea";
import axios from "axios";

function App() {
  const getOrders = () => {
    axios
      .get("http://localhost:3333/orders", {
        headers: { authorization: "38970a11" },
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  const getMeditions = () => {
    axios.get("http://localhost:3333/meditions").then((res) => {
      console.log(res.data);
    });
  };
  const getUsers = () => {
    axios.get("http://localhost:3333/logins").then((res) => {
      console.log(res.data);
    });
  };
  return (
    <DivStyled>
      <Button id="1" funcao={getOrders}></Button>
      <Button id="2" funcao={getMeditions}></Button>
      <Button id="3" funcao={getUsers}></Button>
    </DivStyled>
  );
}

export default App;
