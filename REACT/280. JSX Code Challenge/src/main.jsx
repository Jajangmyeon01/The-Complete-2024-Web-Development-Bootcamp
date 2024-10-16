import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <h1>My Favorite Foods</h1>
      <p>This is a sample React app</p>
      <ul>
        <li>Bacon</li>
        <li>Noodle</li>
        <li>Jamon</li>
      </ul>
    </div>
  </StrictMode>,
)
