import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppProvider } from './context/AppContext.tsx';
import { GoogleOAuthProvider } from "@react-oauth/google";

export const server = "https://localhost:5000";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <GoogleOAuthProvider clientId='1028473031521-oe6409e4k8k8snsnbctuaf3n203lrvdv.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
      
    </AppProvider>
    
  </StrictMode>,
)
