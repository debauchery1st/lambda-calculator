import React from "react";
//{/* Display a button element rendering the data being passed down from the parent container on props */}

const NumberButton = (props) => {

  return (
    <>
      <div className="NumberButton" onClick={() =>props.setDisplay(props.button)} >{props.button}</div>
    </>
  );
};
export default NumberButton;
