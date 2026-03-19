import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const PasswordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <>
    {/* <h1 className='text-4xl text-center text-white mt-5'>Password Generator</h1> */}
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 
    bg-gray-800'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden, mb-4'>
        <input
        type='text'
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={PasswordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flec items-center gap-x-1'>
          <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
           />
           <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultValue={numberAllowed}
          id='numberInput'
          onChange={() => {setnumberAllowed((prev) => !prev);}}   //--prev value to reverse value
           />
           <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultValue={charAllowed}
          id='characterInput'
          onChange={() => {setcharAllowed((prev) => !prev);}}   //--prev value to reverse value
           />
           <label>Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
