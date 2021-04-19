import React from "react";

const B = ({ value }) => {
  console.log("Rendering context:B");
  return <div>B: {JSON.stringify(value)}</div>;
};

export default React.memo(B);
