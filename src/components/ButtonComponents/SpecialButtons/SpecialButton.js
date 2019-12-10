import React from "react";
/* Display a button element rendering the data being passed down from the parent container on props */
const SpecialButton = (props) => {
  return (
    <>
      <SpecialButton>{props.value}</SpecialButton>
    </>
  );
};

export default SpecialButton;
