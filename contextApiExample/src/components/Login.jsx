import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Login() {
    const { setUser } = useContext(UserContext)

    return (
       <div className="flex gap-4">
        <button className='bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 
         rounded-lg shadow-md transition duration-200'
         onClick={() => setUser("yogita")}>Login</button>

         <button className='bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 
         rounded-lg shadow-md transition duration-200'
         onClick={() => setUser("")}>Reset</button>
        </div>
    )
}

export default Login