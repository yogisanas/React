import React from 'react'
import {useState} from 'react'

function InterviewQue() {

    const [counter, setCounter] = useState(15)

    const addValue = () => {
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        //--usestate collect all request in batches and send to ui / run oly one time

        //--callback
        setCounter(prevCounter => prevCounter + 1)  //--1st call complete then 2nd call
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
    }

    const removeValue = () => {
        setCounter(counter - 1)
    }

    return (
        <>
        <h1>Interview Question</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}>Add value</button>
        <br />
        <button onClick={removeValue}>Remove value</button>
        <p>footer: {counter}</p>
            </>
        )
}

export default InterviewQue
