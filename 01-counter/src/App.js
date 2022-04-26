import Title from "./components/Title.js";
import Button from "./components/Button.js";
import Result from "./components/Result.js";
import Author from "./components/Author.js";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const resetCounter = () => {
    setCounter(0);
  };

  const decreaseCounter = () => {
    setCounter((count) => counter - 1);
  };

  const increaseCounter = () => {
    setCounter((count) => counter + 1);
  };

  return (
    <div className="App">
      <Title title="counter" />
      <Result count={counter} />
      <Button button="decrease" counter={decreaseCounter}></Button>
      <Button button="reset" counter={resetCounter}></Button>
      <Button button="increase" counter={increaseCounter}></Button>
      <Author />
    </div>
  );
}

export default App;
