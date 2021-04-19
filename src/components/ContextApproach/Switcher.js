import React from "react";
import context from "./context";

const Switcher = () => {
  const { a, b, toggleA, toggleB } = React.useContext(context);

  return (
    <>
      <label>
        <input type="checkbox" checked={a} onChange={toggleA} />
        <span>Toggle A</span>
      </label>
      <label>
        <input type="checkbox" checked={b} onChange={toggleB} />
        <span>Toggle B</span>
      </label>
    </>
  );
};

export default Switcher;
