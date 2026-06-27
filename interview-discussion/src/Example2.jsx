import React, { useEffect, useState } from 'react'

function Example2() {
    console.log("App rerendered", Math.random());
    
    const [value, setValue] = useState({
        value: 0,
    })

    const clickMe = () =>{
        // console.log("logged");    --no re-rendered
        // setValue(value + 1)       -- re-rendered
        // setValue(1)               --no re-rendered
        // setValue(3)               --2 times re-rendered

        // re-rendered
        setValue({
            value: 0,
        })
    }

    // useEffect(() => {}, [value.value])

    return (
        <>
        <h1>Main Value: {value.value}</h1>
        <button
        onClick={clickMe}
        >Click Me</button>
        </>
    )
}

export default Example2
