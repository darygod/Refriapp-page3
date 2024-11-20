import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Component from './landig.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component />
  </StrictMode>,
)
