import React from "react";
import { useSelector } from "react-redux";

const A = () => {
  const a = useSelector((state) => state.toggleA.value);
  console.log("redux:a");
  return <div>A: {JSON.stringify(a)}</div>;
};

export default React.memo(A);
