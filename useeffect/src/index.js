import React from "react";
import ReactDOM from "react-dom";
import Logeffect from "./App";
import {App} from './App';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Logeffect />
    <hr/>
    <App />
  </React.StrictMode>,
  rootElement
);
