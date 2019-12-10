import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton"
//import any components needed
import "./Operators.css";
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setoperatorState] = useState(operators);
/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
  return (
    <div className="Operators">{operatorState.map(OperatorButton)}</div>
  );
};
export default Operators;
