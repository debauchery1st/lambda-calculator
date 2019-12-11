import React from "react";

const OperatorButton = (props) => {
/* Display a button element rendering the data being passed down from the parent container on props */
  return (
    <>
    <div className="OperatorButton" onClick={() => props.regOp(props.button.value)}>{props.button.char}</div>
    </>
  );
};

export default OperatorButton;
