import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouters from "./AppRoutes"
import Auth0ProviderNav from './auth/Auth0ProviderNav'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'sonner'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderNav>
          <AppRouters />
          <Toaster visibleToasts={1} position='top-right' richColors/>
        </Auth0ProviderNav>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
