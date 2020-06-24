import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Activitate from "./Activitate";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <li>
      <Activitate mesaj="Prepar cafea" />
      <Activitate mesaj="Mic dejun" />
      <Activitate mesaj="Testez 10 functii pentru munca" />
      <Activitate mesaj="Gatesc" />
      <Activitate mesaj="Ridic coletul" />
    </li>
  </React.StrictMode>,
  rootElement
);
