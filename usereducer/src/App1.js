import React, { useReducer } from "react";

function Counter() {
  const reducer = (state, action) => {
    return state + action;
  };
// const [state, dispatch] = useReducer((state, action) => {
    const [count, handler] = useReducer((count, worktodo) => {
    return count + worktodo;
  }, 0);

  const add = () => {
    handler(1);
  };

  return (
    <>
      <button onClick={add}> add </button>
      <button onClick={() => handler(-1)}> less </button>
      <br />
      Counter 2: {count}
    </>
  );
}

export default Counter;
