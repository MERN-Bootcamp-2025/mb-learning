import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReviewsContext, { Provider } from './context/review.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // <ReviewsContext.Provider value={5}>
  //   <App/>
  // </ReviewsContext.Provider>
  <Provider>
    <App/>
  </Provider>
)
