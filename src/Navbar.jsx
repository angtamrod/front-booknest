

function Navbar() {


  return (

    <nav className="nav navbar sticky-top shadow rounded text-emphasis-primary">
        <div className="container">
          {/* <a href="#" className="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="nav-icono bi bi-book-half "  viewBox="0 0 16 16">
              <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
            </svg>
          </a>  */}

          <a className="navbar-brand mx-auto" href="#">
            <img className="img-fluid" src="/imgs/booknest150.svg" alt="BookNest" width="130" height="130" />
          </a>

         {/*  <a href="#" className="nav-enlace pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="nav-icono bi bi-person-circle pr-3" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </a> */} 
        </div>
    </nav>


  )
};

export default Navbar;
