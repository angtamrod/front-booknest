import { Link } from "react-router-dom";

function Navbar() {


  return (

    <nav className="nav navbar sticky-top shadow rounded text-emphasis-primary">
        <div className="container">
            
          <Link to="/login" className="nav-enlace pr-2">
            <i className="nav-icono fs-3 fs--md-2 bi bi-person-fill"></i>
          </Link> 

          <Link to="/" className="navbar-brand mx-auto" href="#">
            <img className="img-fluid" src="/imgs/booknest150.svg" alt="BookNest" width="130" height="130" />
          </Link>

          <Link to="/bookshelf" className="p-1">
            <i className="nav-icono fs-4 fs-md-2 bi bi-book-fill"></i>
          </Link>
        </div>
    </nav>


  )
};

export default Navbar;
