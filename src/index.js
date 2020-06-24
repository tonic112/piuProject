import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Activitate from "./Activitate";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <li>
      <Activitate mesaj="unit1" />
      <Activitate mesaj="unit2" />
      <Activitate mesaj="unit3" />
      <Activitate mesaj="unit4" />
      <Activitate mesaj="unit5" />
    </li>
  </React.StrictMode>,
  rootElement
);
