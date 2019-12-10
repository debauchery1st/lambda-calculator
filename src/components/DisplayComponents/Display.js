import React from "react";

const Display = (props) => {
  /* Display any props data here */
  return <div className="display">{props.stdout || 0}</div>;
};

export default Display;
