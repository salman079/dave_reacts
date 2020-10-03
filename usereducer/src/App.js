import React from "react";
  const { useReducer } = React
  const reducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        throw new Error()
    }
  };
export const App = () => {
    const [count, dispatch] = useReducer(reducer, 0)
    return (
      <>
        Counter 1: {count}
        <button onClick={() => dispatch('INCREMENT')}>+</button>
        <button onClick={() => dispatch('DECREMENT')}>-</button>
      </>
    )
  };