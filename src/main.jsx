import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
//import Registro from './Registro';
import Login from './Login.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Login />
    {/* <Registro /> */}
  </StrictMode>,
)
