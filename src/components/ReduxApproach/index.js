import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle as toggleA } from "../../redux/slices/toggleA";
import { toggle as toggleB } from "../../redux/slices/toggleB";
import ReduxA from "./A";
import ReduxB from "./B";

function ReduxApproach() {
  const dispatch = useDispatch();
  const aValue = useSelector((state) => state.toggleA.value);
  const bValue = useSelector((state) => state.toggleB.value);

  return (
    <table border={1} cellPadding={8} cellSpacing={8}>
      <tbody>
        <tr>
          <td>
            <label>
              <input
                type="checkbox"
                checked={aValue}
                onChange={() => dispatch(toggleA())}
              />
              <span>Toggle A</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={bValue}
                onChange={() => dispatch(toggleB())}
              />
              <span>Toggle B</span>
            </label>
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
  );
}

export default ReduxApproach;
