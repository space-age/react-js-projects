import Title from "./components/General/Title";
import Author from "./components/General/Author";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <div className="App">
      <Title title={"React Calculator"} />
      <Author />
      <Calculator />
    </div>
  );
}

export default App;
