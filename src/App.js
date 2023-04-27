import React from "react";
import {useState} from 'react'
import "./style.css";

export default function App() {
  const [number,setNumber] = useState(0);
  
  function handlePlus () {
    if (number<=4) {
      setNumber(number+1)

    }

  }
  function handleMinus () {
    if (number>=1) {
      setNumber(number-1)

    }
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div className="border">
         <p>{number}</p>
      </div>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>

    </div>
  );
}
