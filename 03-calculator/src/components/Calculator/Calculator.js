import CalculatorContainer from "../UI/CalculatorContainer.js";
import CalculatorButtons from "./CalculatorButtons.js";

const Calculator = () => {
  const calculator = {
    displayValue: "0", // this will take care of the  value being display
    firstOperand: null, // first value entered by the user
    waitingForSecondOperand: false, // check whether waiting for 2nd value
    operator: null, // operator being perform
    results: false, // was results done
  };

  return (
    <CalculatorContainer>
      <CalculatorButtons calculator={calculator} />
    </CalculatorContainer>
  );
};

export default Calculator;
