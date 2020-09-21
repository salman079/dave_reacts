// these are JS code for importing the libraries 
// now because of Babel view use import commond that covert react in the old JS code
// var React = require("react");
// var ReactDom = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Hi(props) {
  // props = properties
  return (
    <div>
      <h1 className="header">Hello React World!!! from Saloo mamoo</h1>
      <p>
        {2 + 5}
        Hello from <strong>{props.name}</strong> to{" "}
        <strong>{props.audience} </strong>
        Salman!!!!!
      </p>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

function MediaCard(props) {
  return (
    <div>
      {props.title}
      {props.body}
      {props.img}
    </div>
  );
}
const Gate = (props) => (
  <div>
    The Gate is
    {/* we can skip == true */}
    {/* <em>{props.isOpen == true ? " Opened" : " Closed"}</em> */}
    <em>{props.isOpen ? " Opened" : " Closed"}</em>
  </div>
);

// Plain function:
function Hi1({ name, audience }) {
  return (
    <div>
      Hello {audience}!!!from {name}!
    </div>
  );
}
// A constant holding an anonymous function:
const Hi2 = function ({ name, audience }) {
  return (
    <div>
      Hello {audience}!!!from {name}{" "}
    </div>
  );
};
// Removing the "function" keyword and adding the
// arrow after the parameter list:
const Hi3 = ({ name }) => {
  return <div>Hello {name}!</div>;
};
// Optional step 3: Removing the braces, which makes the
// "return" implicit so we can remove that too. Leaving the parens
// in for readability:
const Hi4 = ({ name }) => ( 
  <div>
    Hello {name}!
  </div>
);
// Optional step 4: If the component is really short, you can put
// it all on one line:
const Hi5 = ({ name }) => <div>Hello {name}!</div>;

ReactDOM.render(
// we can use any option <div> or [] array, or <React.Fragment>, <>
  // <div>
  [
    <h2>"This is directly displaying in ReactDOM no function calling"</h2>,
    <Hi name="Tooba" audience="Public" />,
    <Hi2 audience="Hi 2 React world " name="pappoo" />,
    <MediaCard
      title={<h2>This is Media Card Component</h2>}
      body={
        <p>
          This is body and <strong>strong.</strong>
        </p>
      }
      img={
        <img
          src={
            "http://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_São_Paulo_Zoo.jpg"
          }
          width={180}
        />
      }
    />,
    <Gate isOpen={false} />
  ],
  // </div>,
  
  // we can interchange these statement
  // document.querySelector("#root")
  document.getElementById("root")
);
