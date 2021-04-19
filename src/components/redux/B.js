import React from "react";
import { useSelector } from "react-redux";

const A = () => {
  const b = useSelector((state) => state.toggleB.value);
  console.log("redux:b");
  return <div>A: {JSON.stringify(b)}</div>;
};

export default React.memo(A);
