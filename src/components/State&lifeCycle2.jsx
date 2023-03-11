import "../css/State&lifeCycle2.css";
import { useState } from "react";

function App () {
    const [result, setResult] = useState();
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const numA = parseInt(a);
    const numB = parseInt(b);
    const handlePlus = () => {
      setResult(numA + numB);
    };
    const handleDe = () => {
      setResult(numA - numB);
    };
    const handleNhan = () => {
      setResult(numA * numB);
    };
    const handleDivi = () => {
      setResult(numA / numB);
    };
    const handleA = (e) => {
      setA(e.target.value);
    };
    const handleB = (e) => {
      setB(e.target.value);
    };
    const handleClear = () => {
      setB("");
      setA("");
      setResult("");
    };
    return (
      <div className="App">
        <input type="number" value={a} onChange={handleA}></input>
        <input type="number" value={b} onChange={handleB}></input>
        <p>Result : {result}</p>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleDe}>-</button>
        <button onClick={handleNhan}>x</button>
        <button onClick={handleDivi}>/</button>
        <button onClick={handleClear}>CLear</button>
      </div>
    );
  }

  export default App;