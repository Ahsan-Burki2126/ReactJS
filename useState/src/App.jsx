import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let value = 0;
  let [value, setValue] = useState(0);
  let inncreaseValue = () => {
    setValue(value + 1);
  };
  return (
    <>
      <h1>Hello This is the {value}</h1>
      <button onClick={inncreaseValue}>Increase Value {value}</button>
    </>
  );
}

export default App;
