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

const router = createBrowserRouter([
  {
    path : "/",
    element : <Index />,
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
    {/* <App /> 
    <Login />
   <Registro /> */}

    <RouterProvider router={router} />
  </StrictMode>,
)
