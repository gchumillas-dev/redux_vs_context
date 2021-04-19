import React from "react";
import { useSelector } from "react-redux";

const A = () => {
  const a = useSelector((state) => state.toggleA.value);
  console.log("Rendering redux:A");
  return <div>A: {JSON.stringify(a)}</div>;
};

export default A;
