import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed
import "./Specials.css";
//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials);
/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
  return (
    <div className="Specials">{specialState.map((n, idx) => <SpecialButton specialOp={props.specialOp} key={`s${idx}`} button={n} />)}</div>
  );
};

export default Specials;
