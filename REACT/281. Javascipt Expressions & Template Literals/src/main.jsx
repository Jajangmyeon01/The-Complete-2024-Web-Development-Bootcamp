import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const fName = "Gen";
const lName = "Vergara"
const favNum = 7;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <h1>Hello! {fName} {lName}</h1>
      <p>Your lucky number is {favNum}</p>
      <p>Random number between (1-9): {Math.floor(Math.random() * 10)}</p>
    </div>
  </StrictMode>,
)
