import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username: "yogita",
    age: 25
  }

  let newArr = [1, 2, 3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    {/* <Card channel="chaiaurcode" someObj={newArr}/> */}
    <Card username="chaiaurcode" btnText="click me"/>
    <Card username="yogita" />
    </>
  )
}

export default App
