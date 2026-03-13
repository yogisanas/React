import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import {jsx as _jsx} from "react/jsx-runtime.js"   //--createElement() can take like this from jsx

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// createRoot(document.getElementById('root')).render(  
//   <StrictMode>
//     {/* <App /> */}
//     <MyApp />
//    </StrictMode>
// )

// const reactElement = {             //--not work because render want some syntax
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)

const anotherUser = "React.."

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // MyApp()
  // reactElement     //--not work
  // anotherElement
  reactElement
  // <App />
)
