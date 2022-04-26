import styles from "./CalculatorButton.module.css";

const CalculatorButton = (props) => {
  const classes = `${styles[`${props.className}`]}`;

  // object containing the operator functions
  const performCalculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
  };

  // Resets Calculator to default state
  const resetCalculator = () => {
    props.calculator.displayValue = "0";
    props.calculator.firstOperand = null;
    props.calculator.waitingForSecondOperand = false;
    props.calculator.operator = null;
    props.calculator.results = false;
  };

  /****************************************************************
   *
   * Functions that handle the Calculator Updates
   *
   ****************************************************************/

  /*
    Updates the Value being display on the input screen
  */
  const updateDisplay = () => {
    props.updateResult(props.calculator.displayValue);
  };

  /*
    Handles input number and updates the calcualtor object
  */
  const inputDigit = (digit) => {
    const { displayValue, waitingForSecondOperand } = props.calculator;
    if (waitingForSecondOperand === true) {
      props.calculator.displayValue = digit;
      props.calculator.waitingForSecondOperand = false;
    } else {
      props.calculator.displayValue =
        displayValue === "0" ? digit : displayValue + digit;
    }
  };

  /*
    Handles decimal input and updates the calculator object
  */
  const inputDecimal = (dot) => {
    if (props.calculator.waitingForSecondOperand) {
      props.calculator.displayValue = "0" + dot;
      props.calculator.waitingForSecondOperand = false;
    }

    // if the displayValue does not contain a decimal place
    if (!props.calculator.displayValue.includes(dot)) {
      props.calculator.displayValue += dot;
    }
  };

  /*
    Handles the operator clicked
  */
  function inputOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = props.calculator;
    const inputValue = parseFloat(displayValue);

    // if new operator is clicked and still waiting for a second value
    // then change the old operator to the new one clicked
    if (operator && props.calculator.waitingForSecondOperand) {
      props.calculator.operator = nextOperator;
      return;
    }

    //if firstOperand value is empty,
    //then place the value entered by the user to the firstOperand value
    if (firstOperand == null) {
      props.calculator.firstOperand = inputValue;
    }
    // if operator is true,
    //then perform calculation and update calculator
    else if (operator) {
      const currentValue = firstOperand || 0;
      const result = performCalculation[operator](currentValue, inputValue);

      props.calculator.displayValue = String(result);
      props.calculator.firstOperand = result;
    }

    props.calculator.waitingForSecondOperand = true;
    props.calculator.operator = nextOperator;
  }
  /****************************************************************
   *
   * Functions that handle button clicks
   *
   ****************************************************************/
  /*
    resets calculator after result was returned by "="
    and a number is clicked
  */
  const handlerResetCalculator = () => {
    if (
      props.calculator.operator === "=" &&
      props.calculator.waitingForSecondOperand &&
      (props.type === "number" || props.type === "decimal")
    ) {
      resetCalculator();
      if (props.type === "decimal") {
        inputDecimal(props.value);
        updateDisplay();
        return;
      }
      props.calculator.displayValue = props.value;
      updateDisplay();
      return true;
    }
    return false;
  };

  /*
   If operation is cliked, executes then returns
  */
  const handlerOperatorClick = () => {
    if (props.type === "operation") {
      inputOperator(props.value);
      updateDisplay();
      return true;
    }
    return false;
  };

  /*
    If decimal is clicked, handles the decimal
    Returns boolean on whether the handler got executed
  */
  const handlerDecimalClick = () => {
    if (props.type === "decimal") {
      inputDecimal(props.value);
      updateDisplay();
      return true;
    }
    return false;
  };

  /*
    If clear is clicked, then resets calculator and updates the display
    Returns boolean on whether the handler got executed
  */
  const handlerClearClick = () => {
    if (props.type === "clear") {
      resetCalculator();
      updateDisplay();
      return true;
    }
    return false;
  };

  /*
   If button type is a number, then will handle the input Digit and update the display
   Returns boolean on whether the handler got executed
  */
  const handlerNumberClicked = () => {
    if (props.type === "number") {
      inputDigit(props.value);
      updateDisplay();
      return true;
    }
    return false;
  };

  /*
   Function that handles the button when clicked
  */
  const buttonHandler = (event) => {
    if (handlerResetCalculator()) return;
    if (handlerOperatorClick()) return;
    if (handlerDecimalClick()) return;
    if (handlerClearClick()) return;
    if (handlerNumberClicked()) return;
  };

  return (
    <button className={classes} onClick={buttonHandler}>
      {props.value}
    </button>
  );
};

export default CalculatorButton;
