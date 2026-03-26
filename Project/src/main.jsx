import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UseState from './components/Hooks/UseState.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <UseState />
  </StrictMode>,
)
