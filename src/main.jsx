import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'

import Index from './Index.jsx';
import App from './App.jsx';
import Registro from './Registro';
import Login from './Login.jsx';
import RutaProtegida from './components/RutaProtegida.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : (
      <RutaProtegida>
          <Index />  
      </RutaProtegida>
    ),
    errorElement : <h1>Error 404</h1>
  },
  {
    path : "/bookshelf",
    element : <App />
  },
  {
    path : "/login",
    element : <Login />,
  },
  {
    path : "/registro",
    element : <Registro />,
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
