import React from "react";
import context from "../context";

const A = () => {
  const { a } = React.useContext(context);
  console.log("a");
  return <div>A: {JSON.stringify(a)}</div>;
};

export default React.memo(A);
