import React from "react";
import A from "./components/A";
import B from "./components/B";
import context from "./context";

function App() {
  const [a, setA] = React.useState(false);
  const [b, setB] = React.useState(false);

  return (
    <context.Provider value={{ a, b }}>
      <div>
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
      </div>
      <A />
      <B />
    </context.Provider>
  );
}

export default App;
