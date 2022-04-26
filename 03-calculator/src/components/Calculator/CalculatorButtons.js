import styles from "./CalculatorButtons.module.css";
import CalculatorButton from "./CalculatorButton";
import { useState } from "react";

const CalculatorButtons = (props) => {
  const [result, setResult] = useState(0);

  //Updates the Value being display on the results screen
  const updateResult = (newResult) => {
    setResult(newResult);
  };

  // Place holder function for when Input is change
  // for now, resets the result to zero
  const doNothing = () => {
    setResult(0);
  };

  return (
    <div className={`${styles["calculator-keys"]}`}>
      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        className="clear"
        type="clear"
        value="C"
      />
      <input
        className={styles.results}
        value={result}
        onChange={doNothing}
        type="text"
      />

      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="number"
        value="7"
      />
      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="number"
        value="8"
      />
      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="number"
        value="9"
      />
      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="operation"
        value="+"
      />

      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="number"
        value="4"
      />
      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="number"
        value="5"
      />
      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="number"
        value="6"
      />
      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="operation"
        value="-"
      />

      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="number"
        value="1"
      />
      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="number"
        value="2"
      />
      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="number"
        value="3"
      />
      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="operation"
        value="*"
      />

      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="number"
        value="0"
      />
      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="decimal"
        value="."
      />
      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        className="equals"
        type="operation"
        value="="
      />
      <CalculatorButton
        calculator={props.calculator}
        updateResult={updateResult}
        type="operation"
        value="/"
      />
    </div>
  );
};

export default CalculatorButtons;
