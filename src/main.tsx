import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouters from "./AppRoutes"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  </React.StrictMode>,
)
