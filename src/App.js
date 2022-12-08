import { useState } from "react";
import "./App.css";

function App() {
  let [total, setTotal] = useState();
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  const handlePlus = () => {
    if (numberOne[0] !== "0" && numberTwo[0] !== "0") {
      total = setTotal(Number(numberOne) + Number(numberTwo));
    } else setTotal("Change number!!!");
  };
  const handleMinus = () => {
    if (numberOne[0] !== "0" && numberTwo[0] !== "0") {
      total = setTotal(Number(numberOne) - Number(numberTwo));
    } else setTotal("Change number!!!");
  };
  const handleMultiply = () => {
    if (numberOne[0] !== "0" && numberTwo[0] !== "0") {
      total = setTotal(Number(numberOne) * Number(numberTwo));
    } else setTotal("Change number!!!");
  };
  const handleDivide = () => {
    if (numberOne[0] !== "0" && numberTwo[0] !== "0") {
      total = setTotal(Number(numberOne) / Number(numberTwo));
    } else setTotal("Change number!!!");
  };

  const handleChangeOne = (e) => {
    setNumberOne(e.target.value);
  };
  const handleChangeTwo = (e) => {
    setNumberTwo(e.target.value);
  };
  return (
    <div className="App">
      <input
        type="number"
        value={numberOne}
        onChange={handleChangeOne}
        placeholder="Write number a"
      />
      <input
        type="number"
        value={numberTwo}
        onChange={handleChangeTwo}
        placeholder="Write number b"
      />
      <div>
        <button onClick={handlePlus}>plus</button>
        <button onClick={handleMinus}>minus</button>
        <button onClick={handleMultiply}>multiply</button>
        <button onClick={handleDivide}>divide</button>
      </div>
      <div>
        <span>{total}</span>
      </div>
    </div>
  );
}

export default App;
