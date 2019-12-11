import React from "react";
/* Display a button element rendering the data being passed down from the parent container on props */
const SpecialButton = (props) => {
  return (
    <>
      <div className="SpecialButton" onClick={() => props.specialOp(props.button)}>{props.button}</div>
    </>
  );
};

export default SpecialButton;
