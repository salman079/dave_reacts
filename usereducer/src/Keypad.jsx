import React, { useReducer } from "react";
import "./styles.css";
function reducer(state, action) {
  switch (action) {
    case "a":
      return (state = "a");
    case "ab":
      return (state = "ab");
    case "abc":
      return (state = "abc");
    case "abcd":
      return (state = "abcd");
    case "abcde":
      return (state = "abcde");
    case "abcdef":
      return (state = "abcdef");
    default:
      return (state = "Wrong");
  }
}
export default function Keypad() {
  const [state, dispatch] = useReducer(reducer, "closed");
  
  return (
    <div className={state}>
      Open the Lock <br />
      Lock is : {state} <br />
      <button onClick={() => dispatch("a")}> One </button>
      <button onClick={() => dispatch(state + "b")}> Two </button>
      <button onClick={() => dispatch(state + "c")}> Three </button>
      <button onClick={() => dispatch(state + "d")}> Four </button>
      <button onClick={() => dispatch(state + "e")}> Five </button>
      <button onClick={() => dispatch(state + "f")}> Six </button>
    </div>
  );
}
