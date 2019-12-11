import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from './NumberButton';
import "./Numbers.css";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  // const [numberState, setNumberState] = useState(numbers);
  const [numberState] = useState(numbers);
  const buttonOrder = [6, 7, 8, 3, 4, 5, 0, 1, 2, 9, 10];
/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
  return (
    <div className="Numbers">{buttonOrder.map((n) => <NumberButton toggleWhole={props.toggleWhole} setDisplay={props.setDisplay} key={`n${n}`} button={numberState[n]} />)}</div>
  );
};

export default Numbers;
