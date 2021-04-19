import React from "react";
import Switcher from "./Switcher";
import A from "./A";
import B from "./B";
import context from "./context";

const ContextApproach = () => {
  const [a, setA] = React.useState(false);
  const [b, setB] = React.useState(false);
  const toggleA = () => setA((value) => !value);
  const toggleB = () => setB((value) => !value);

  return (
    <context.Provider value={{ a, b, toggleA, toggleB }}>
      <h3>Context-API approach</h3>
      <table border={1} cellPadding={8} cellSpacing={8}>
        <tbody>
          <tr>
            <td>
              <Switcher />
            </td>
            <td>
              <A value={a} />
            </td>
            <td>
              <B value={b} />
            </td>
          </tr>
        </tbody>
      </table>
    </context.Provider>
  );
};

export default ContextApproach;
