import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router } from '@/route';
import { Toaster } from "@/components/ui/sonner"
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router/>   
      <Toaster richColors position="top-right" />
    </Provider>
  </StrictMode>
)
