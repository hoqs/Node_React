import React, { useState } from "react";
import { DivStyled } from "./styles";
import { Button } from "./components/Button/";
import { TextArea } from "./components/TextArea";
import axios from "axios";
import api from "./services/api.js";

const App = () => {
  const getOrders = () => {
    api.get("orders").then((res) => {
      console.log(res.data);
    });
  };
  const getMeditions = () => {
    api.get("meditions").then((res) => {
      console.log(res.data);
    });
  };
  const getUsers = () => {
    api.get("logins").then((res) => {
      console.log(res.data);
    });
  };
  const postOrders = () => {
    api
      .post("orders", {
        id: "50",
        data: "5050",
        costumer: "50505050",
        first_medition: 50,
        user_id: "38970a11",
      })
      .then((req) => {
        console.log(req.data);
      });
  };
  const postMeditions = () => {
    api.get("meditions").then((res) => {
      console.log(res.data);
    });
  };
  const doLogin = () => {
    api.get("logins").then((res) => {
      console.log(res.data);
    });
  };
  const postUsers = () => {
    api.get("logins").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <DivStyled>
      <Button id="1" funcao={getOrders} text="getOrders"></Button>
      <Button id="2" funcao={getMeditions} text="getMeditions"></Button>
      <Button id="3" funcao={getUsers} text="getUsers"></Button>
      <Button id="4" funcao={postOrders} text="postOrders"></Button>
      <Button id="5" funcao={postMeditions} text="postMeditions"></Button>
      <Button id="6" funcao={postUsers} text="postUsers"></Button>
      <Button id="7" funcao={doLogin} text="doLogin"></Button>
    </DivStyled>
  );
};

export default App;
