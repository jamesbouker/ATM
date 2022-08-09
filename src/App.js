import { useMemo, useState } from "react";
import "./App.css";
import Radio from "./Radio";

const marginRight = {
  marginRight: "0.5rem",
};
const textTransform = {
  textTransform: "capitalize",
};

function App() {
  const [mode, setMode] = useState("deposit");
  const [amount, setAmount] = useState(0);
  const [deltaAmount, setDeltaAmount] = useState(0);

  const isValid = useMemo(() => {
    if (mode === "deposit") {
      return deltaAmount > 0;
    }
    return deltaAmount <= amount && deltaAmount > 0;
  }, [amount, deltaAmount, mode]);

  return (
    <div className="App">
      <h1>ATM</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (mode === "deposit") {
            setAmount(amount + Number(deltaAmount));
          } else {
            setAmount(amount - Number(deltaAmount));
          }
          setDeltaAmount(0);
        }}
      >
        <fieldset style={{ marginBottom: "0.5rem" }}>
          <legend>Select an option:</legend>
          <Radio id="deposit" name="mode" checked={mode} setChecked={setMode} />
          <Radio
            id="withdrawal"
            name="mode"
            checked={mode}
            setChecked={setMode}
          />
        </fieldset>
        <label
          className="amount"
          style={{ ...marginRight, ...textTransform }}
          htmlFor="amount"
        >
          {mode}
        </label>
        <input
          onChange={(e) => {
            setDeltaAmount(e.target.value);
          }}
          value={deltaAmount}
          style={marginRight}
          id="amount"
          type="number"
        />
        <button disabled={!isValid} type="submit">
          Submit
        </button>
      </form>
      <h2>Account Balance $ {amount}</h2>
    </div>
  );
}

export default App;
