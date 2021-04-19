import React from "react";
import context from "./context";

const B = () => {
  const { b } = React.useContext(context);
  console.log("b");
  return <div>B: {JSON.stringify(b)}</div>;
};

export default React.memo(B);
