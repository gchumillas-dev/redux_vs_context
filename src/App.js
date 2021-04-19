import React from "react";
import A from "./components/A";
import B from "./components/B";
import context from "./context";

function App() {
  const [a, setA] = React.useState(false);
  const [b, setB] = React.useState(false);

  return (
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
  );
}

export default App;
