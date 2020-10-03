import React, { useEffect, useRef, useState } from "react";

const Logeffect = () => {
  const [text, setText] = useState(" ");
  useEffect(() => {
    console.log("latest value: ", text);
    document.title = text;
  });
  return (
    <input value={text} onChange={(e) => setText(e.target.value)} />
    );
};

const App = () => {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  useEffect(
    () => {
      console.log("render");
      inputRef.current.focus();
    },
    // [inputRef]
    [value]
  );
  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
export default Logeffect;
export { App };
