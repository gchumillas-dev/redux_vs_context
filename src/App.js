import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle as toggleA } from "./redux/slices/toggleA";
import { toggle as toggleB } from "./redux/slices/toggleB";
import A from "./components/A";
import B from "./components/B";
import ReduxA from "./components/redux/A";
import ReduxB from "./components/redux/B";
import context from "./context";

function App() {
  const [a, setA] = React.useState(false);
  const [b, setB] = React.useState(false);

  const dispatch = useDispatch();
  const aValue = useSelector((state) => state.toggleA.value);
  const bValue = useSelector((state) => state.toggleB.value);

  return (
    <>
      {/* React.Context approach */}
      <context.Provider value={{ a, b }}>
        <table border={1} cellPadding={8} cellSpacing={8}>
          <tbody>
            <tr>
              <td>
                <label>
                  <input
                    type="checkbox"
                    checked={a}
                    onChange={() => setA((value) => !value)}
                  />
                  <span>Toggle A</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={b}
                    onChange={() => setB((value) => !value)}
                  />
                  <span>Toggle B</span>
                </label>
              </td>
              <td>
                <A />
              </td>
              <td>
                <B />
              </td>
            </tr>
          </tbody>
        </table>
      </context.Provider>
      {/* Redux approach */}
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
    </>
  );
}

export default App;
