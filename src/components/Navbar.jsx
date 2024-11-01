//Importamos hooks
import { Link } from "react-router-dom";


/**
 * Componente Navbar.
 * Este componente genera un Navbar para poder usarlo en el resto de componentes
 * 
 */
function Navbar() {


  return (

    <>
    <header>
    <nav className="nav navbar sticky-top shadow rounded text-emphasis-primary d-flex justify-content-center align-items-center">
        <div className="nav-div container d-flex justify-content-between align-items-center">

          {/* Con la etiqueta link y el atributo to="" podemos navegar entre componentes generando una SPA */}
          <Link to="/login" className="nav-link nav-enlace p-1 text-decoration-none" title="Login">
            <i className="nav-icono fs-1 bi bi-person-fill"></i>
            <span className="nav-span d-none d-md-inline ms-1">Login</span>
          </Link> 

          <Link to="/" className="nav-link nav-link--logo navbar-brand mx-auto">
            <img className="img-fluid nav-logo" src="/imgs/booknest150.svg" alt="Logo de BookNest" />
          </Link>

          <Link to="/bookpack" className="nav-link p-1 text-decoration-none"title="BookPack">
            <span className="nav-span d-none fs-md-3 d-md-inline m-2 ms-1">BookPack</span>
            <i className="nav-icono fs-1  bi bi-backpack-fill"></i>
          </Link>
        </div>
    </nav> 
</header>

    

    </>

  )
};

export default Navbar;
