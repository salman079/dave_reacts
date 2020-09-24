import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Room() {
  const classes = useStyles();
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
      <div className={classes.root}>
      <Button onClick={() => setTemp(temp + 1)}> <PlusOneIcon /> </Button>
      <button onClick={() => setTemp(temp - 1)}> <ExposureNeg1Icon /> </button> <br />
      </div>
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
      <button onClick={() => setCount(count1 + 1)}> <FormatIndentIncreaseIcon /> </button>
      <button onClick={() => setCount(count1 - 1)}> <FormatIndentDecreaseIcon /> </button>
      <br />
Typed Name is {typedName} <br />
Entered Name is {enteredName} <br />
      <input type="text" placeholder="Enter your name"
        onChange={inputName}
        value={typedName}
      />
      <br />
      <div className={classes.root}>
      <Button variant="contained" color="secondary" onClick={enterName}> Enter  </Button><br />
    </div>
    </div>
  );
}

function OneTimeButton(props) {
  const [clicked, setClicked] = useState(false);
  const classes = useStyles();
  function doClick() {
    // props.onClick();
    setClicked(true);
  }
  return (
    <div className={classes.root}>
    
    <Button variant="contained" color="primary"
      onClick={clicked ? undefined : doClick}
      disabled={clicked}
    >
      You Can Only Click Me Once
    </Button>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Room />
    <OneTimeButton />
  </div>,
  document.getElementById("root"));
