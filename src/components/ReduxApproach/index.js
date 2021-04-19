import React from "react";
import Switcher from "./Switcher";
import ReduxA from "./A";
import ReduxB from "./B";

function ReduxApproach() {
  return (
    <>
      <h3>Redux approach</h3>
      <table border={1} cellPadding={8} cellSpacing={8}>
        <tbody>
          <tr>
            <td>
              <Switcher />
            </td>
            <td>
              <ReduxA />
            </td>
            <td>
              <ReduxB />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ReduxApproach;
