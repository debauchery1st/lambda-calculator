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

const Numbers = () => {
  // STEP 2 - add the imported data to state
  // const [numberState, setNumberState] = useState(numbers);
  const [numberState, setNumberState] = useState(numbers);
  const originalOrder = () => numberState.map(NumberButton);
  const calculatorOrder = () => [6, 7, 8, 3, 4, 5, 0, 1, 2, 9, 10].map((n) => numberState[n]).map(NumberButton);
/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
  return (
    <div className="Numbers">{calculatorOrder()}</div>
  );
};

export default Numbers;
