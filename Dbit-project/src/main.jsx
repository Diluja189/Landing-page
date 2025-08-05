import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mystate from'./Mystate.jsx'
import Count from './count.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
<Mystate/>
<Count/>
  </StrictMode>,
)
