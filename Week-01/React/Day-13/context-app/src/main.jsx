import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterProvider } from './context/CounterContext.jsx'
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App/>
    </UserProvider>
  </StrictMode>,
  // <CounterProvider>
  //   <App/>
  // </CounterProvider>
)
