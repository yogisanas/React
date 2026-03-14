import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5     //--not reflect on ui

  const addValue = () => {
    // console.log("value added", Math.random());
    console.log("clicked", counter);
    // counter = counter + 1
    // setCounter(counter)
    if(counter < 20) setCounter(counter + 1)
  }

  const removeValue = () => {
    if(counter > 0) setCounter(counter - 1)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
