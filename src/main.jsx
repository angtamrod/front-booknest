import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css'

import Index from './Index.jsx';
import App from './App.jsx';
import Registro from './Registro';
import Login from './Login.jsx';
import RutaProtegida from './components/RutaProtegida.jsx';


/**
 * REACT-ROUTER
 * 
 * hooks: - {createBrowserRouter,RouterProvider} Para hacer un sistema de rutas
 *        - {createRoot} Para establecer la raíz del proyecto
 * 
 * rutas: - Ruta protegida es un componente(que encierra al componente <Index /> y el componente <App />) y sirve para que si intentamos ir  al index o a la app antes de iniciar sesión te redirige al login
 *        - Ruta para login    
 *        - Ruta para registro 
 */

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
    path : "/bookpack",
    element : (
      <RutaProtegida>
          <App />
      </RutaProtegida>
    ),
    errorElement : <h1>Error 404</h1>
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
