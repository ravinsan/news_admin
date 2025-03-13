import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from "@/components/ui/sonner"
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import App from './App';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <App/>   
      </BrowserRouter>
      <Toaster richColors position="top-right" />
    </Provider>
  </StrictMode>
)
