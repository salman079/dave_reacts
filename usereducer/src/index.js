import React from "react";
import ReactDOM from "react-dom";
import Counter from "./App1";
import { App } from "./App";
import ShoppingList from "./App2";
import Room from './Room';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <App />
    <br />
    <Counter />
    <br />
    <ShoppingList />
    <br />
    <Room />
  </div>,
  rootElement
);
