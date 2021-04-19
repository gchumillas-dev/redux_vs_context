import React from "react";

const A = ({ value }) => {
  console.log("Rendering context:A");
  return <div>A: {JSON.stringify(value)}</div>;
};

export default React.memo(A);
