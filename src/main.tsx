import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouters from "./AppRoutes"
import Auth0ProviderNav from './auth/Auth0ProviderNav'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderNav>
        <AppRouters />
      </Auth0ProviderNav>
    </BrowserRouter>
  </React.StrictMode>,
)
