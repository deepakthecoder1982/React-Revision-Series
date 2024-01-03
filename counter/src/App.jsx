import { useState } from 'react'
import './App.css'

function App() {
  let count = 5;
  const addValue =()=> {
    const elementValue = document.querySelector("span");
    count++;
    elementValue.innerHTML = count;
    console.log(count)
  }
  const reduceValue = ()=> {
    const elementValue = document.querySelector("span");
    count--;
    elementValue.innerHTML = count;
    console.log(count)
  }
  return (
    <>
      
      <h1>Counter Application</h1>
      <h2>Counter Value : <span>{count}</span></h2>
      <br />
      <button onClick={addValue}>+</button>
      <button onClick={reduceValue}>-</button>
    </>
  )
}

export default App
