import { useState } from "react";

import Index from "./Index.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Formulario from "./components/Formulario.jsx";
import Tarjeta from "./components/Tarjeta.jsx";


function App() {

let [formularioOn,setFormularioOn] = useState(false);


  
  return (
    <>

    <Navbar />
    <main>
        <Index /> 

    

        <section className="app gap-4 pb-3 mx-auto d-flex flex-column justify-content-center align-items-center text-center rounded min-vh-80">
              <div className="max-vw-100 pb-2 mx-auto grid row text-center justify-content-center gap-2 align-items-center">
                    <h1 className="app-h1 row-10 mt-5 p-2 text-center p-3 text-wrap rounded col-md-9 md-w-100">BookShelf</h1>
                    <div className="container md-p-5 border d-flex justify-content-center align-items-center">
                      <h3 className="app-h3 row-10 lh-base border fs-4 md-w-30 text-center text-wrap rounded col-md-9 md-w-40">Deja tus libros donde quieras, sin preocuparte por el espacio... Es Rent Free, tanto para tus libros como para tu mente</h3>
                    </div>
              </div>
              
              <h5 className="app-h5 fs-6 mt-2 text-wrap rounded">Pulsa aquí para <br /> añadir una nueva lectura...</h5>
              <button type="button" className="app-button btn btn-link p-0 border-0 mt-1 mb-2" 
                      onClick={() => {
                            setFormularioOn(!formularioOn)
                      }}
              >{ formularioOn ? <i className="app-icon fs-1 p-6 bi bi-arrow-up-circle-fill"></i> : <i className="app-icon fs-1 p-6 bi bi-plus-circle-fill"></i> }</button>

              {formularioOn ? <Formulario /> : null}
        </section>
        
        <section className="app-container gap-4 pb-4 mx-auto d-flex flex-column justify-content-center align-items-center">
            <h3 className="app-h3 app-h3--libros p-3 container text-center mx-auto  mb-1">BookList</h3>
            <div className=" container gap-1 pb-3 mx-auto d-flex flex-column justify-content-center align-items-center">
                <Tarjeta />

                <Tarjeta />

                <Tarjeta />
            </div>
        </section>


    </main>
    

      <Footer />
    
    </>
  )
}

export default App;