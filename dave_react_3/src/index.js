import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Room() {
  const [typedName, setTypedName] = React.useState("");
  const [enteredName, setEnteredName] = React.useState("");
  const inputName = (e) => {
    setTypedName(e.target.value);
  };
  const enterName = (event) => {
    setEnteredName(typedName);
  };
  const [isLit, setLit] = React.useState(false);
  const [temp, setTemp] = React.useState(6);
  const [count1, setCount] = React.useState(0);
  const DoubleClick = () => setLit(false);
  return (
    <div className={`room ${isLit ? "lit1" : "dark1"}`}>

      the room is {isLit ? "lit" : "dark"} <br />
      <button onClick={() => setLit(!isLit)}> {isLit ? "Turn off the light" : "Turn on the light"} / Flip the light </button> <br />
      <button onClick={() => setLit(true)} onDoubleClick={DoubleClick}> light On </button>
      <button onClick={() => setLit(false)}> Light Off </button> <br />
      The current temprature is {temp}
      <button onClick={() => setTemp(temp + 1)}> + </button>
      <button onClick={() => setTemp(temp - 1)}> - </button> <br />
      Counter value is {count1}
      <form>
        change by <input type="number"
          id="change"
          value={count1}
          placeholder="change by"
          required="required"
        // onChange={setCount(count1+1)}
        >
        </input>
      </form>
      <button onClick={() => setCount(count1 + 1)}> Increase </button>
      <button onClick={() => setCount(count1 - 1)}> Decrease </button>
      <br />
Typed Name is {typedName} <br />
Entered Name is {enteredName} <br />
      <input type="text" placeholder="Enter your name"
        onChange={inputName}
        value={typedName}
      />
      <br />
      <button onClick={enterName}> Enter  </button><br />
    </div>
  );
}

function OneTimeButton(props) {
  const [clicked, setClicked] = useState(false);

  function doClick() {
    // props.onClick();
    setClicked(true);
  }
  return (
    <button
      onClick={clicked ? undefined : doClick}
      disabled={clicked}
    >
      You Can Only Click Me Once
    </button>
  );
}
ReactDOM.render(
  <div>
    <Room />
    <OneTimeButton />
  </div>,
  document.getElementById("root"));
