import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Display from './components/DisplayComponents/Display';

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [displaying, setDisplaying] = useState(0);
  const [reducer, setReducer] = useState([]);
  const [computing, setComputing] = useState(""); // CSV 
  const addNum = (num) => (computing.length === 0) ? setComputing(num):setComputing([computing, num].join(','));
  const setDisplay = (args) => {
    const nextDisplay = (args === ".") ? ((displaying.includes(".")) ? displaying:[displaying, args].join("")):[displaying, args].join(""); // 1 decimal point only
    setDisplaying(nextDisplay.endsWith(".") ? nextDisplay:String(Math.abs(nextDisplay))); // no leading zeros
  }
  const mathOps = {
    // dispatch Math calls
    "*": (r) => r.reduce((a, b) => a * b),
    "+": (r) => r.reduce((a, b) => a + b),
    "-": (r) => r.reduce((a, b) => a - b),
    "/": (r) => r.reduce((a, b) => a / b),
    "%": (r) => r.reduce((a, b) => a % b),
    "=": (f, r) => f(r)
  }
  const standAloneOps = {
    // dispatch calls that don't have params
    "C": () => {
      setDisplaying("0");
      setComputing([]);
      setReducer([]);
    },
    "+/-": () => setDisplaying(0 - (parseFloat(displaying)))
  }
  const specialOp = (args) => {
    // special operators
    if (args === "%") {
      // treat mod as normal operation
      setReducer(args); // future operation
      addNum(displaying); // past memory
      setDisplaying("0"); // present memory
      return
    }
    if (!Object.keys(standAloneOps).includes(args)) return
    standAloneOps[args](); // no arguments necessary
  }
  const regOp = (args) => {
    // regular operators
    addNum(displaying); // add number to the list of comma separated values
    if (args === "=") {
      if (!Object.keys(mathOps).includes(reducer)) return; // shouldn't be here without a reducer
      const numberArray = [computing, displaying].join(',').split(','); // cast result as Array.
      setDisplaying(mathOps[reducer](numberArray.map(parseFloat))); // compute & update display.
      setComputing(""); // clear memory (past)
      setReducer([]); // clear the operation.
      return true
    }
    if (Object.keys(mathOps).includes(reducer) && reducer !== []) {
      const numberArray = [computing, displaying].join(',').split(','); // cast result as Array.
      setComputing(mathOps[reducer](numberArray.map(parseFloat))); // compute and store result.
      setReducer(args); // future operation.
      setDisplaying(""); // clear display.
      return true
    }
    setReducer(args); // future operation
    addNum(displaying); // store in past memory
    setDisplaying(""); // present memory
  }
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  /* STEP 4 - Render your components here and be sure to properly import/export all files */
  return (
    <div className="container">
      <Logo />
      <div className="App">
        {<Display stdout={displaying} />}
        {<Specials specialOp={specialOp} />}
        <div style={{display: "flex", justifyContent: "center"}}>
          {<Numbers setDisplay={setDisplay} />}{<Operators regOp={regOp}/>}
        </div>
      </div> 
    </div>
  );
}

export default App;
