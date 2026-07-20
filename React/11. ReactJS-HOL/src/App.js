import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {

  const [count, setCount] = useState(0);

  // Method 1
  const increment = () => {
    setCount(count + 1);
  };

  // Method 2
  const sayHello = () => {
    alert("Hello! Counter Increased.");
  };

  // Multiple methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Decrement
  const decrement = () => {
    setCount(count - 1);
  };

  // Welcome message
  const sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic Event
  const onPress = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>React Event Examples</h1>

      <h2>Counter : {count}</h2>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={onPress}>
        OnPress
      </button>

      <hr />

      <CurrencyConvertor />

    </div>
  );
}

export default App;