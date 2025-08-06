import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import only once
import App from './App.jsx';
import Mystate from './Mystate.jsx';
import Count from './count.jsx';
import Login from './bacis/login.jsx';
import Login1 from './bacis/Login1.jsx';
import List from './list.jsx';
import Usedref from './Usedref.jsx';
import Diluja from './Diluja.jsx';
import Map from './Map.jsx';
import Portfolio from './Portfolio.jsx';
import LoginPage from './LoginPage.jsx';
import Log from './log.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
    {/* <LoginPage /> */}
    {/* <Log /> */}
    {/* <App /> */}
    {/* <Mystate /> */}
    {/* <Count /> */}
  </StrictMode>
);
