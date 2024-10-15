import { useState } from "react";


import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Formulario from "./Formulario.jsx";
import Tarjeta from "./Tarjeta.jsx";


function App() {

let [formularioOn,setFormularioOn] = useState(false);


  
  return (
    <>

      <Navbar />

      
      <div className="foto container-fluid d-flex align-items-center justify-content-center vh-100 vw-100 mb-4 mt-0 rounded">
          <a className="foto-texto text-light card p-4 bg-opacity-50 shadow rounded-pill" href="#">
              <h1 className="fs-1 text-center">Comienza con BookNest</h1>
          </a>
      </div>

    <section className="introduccion gap-4 pb-3 mx-auto d-flex flex-column justify-content-center align-items-center text-center rounded">
          <h3 className="introduccion-h3 p-3 container text-center mx-auto  mb-4">About us</h3>
          <div className="presentacion container border rounded p-2 d-flex flex-column flex-md-row mx-auto m-2 mb-4 bt-1 bb-1 rounded g-0">
              <div className="d-flex flex-column flex-md-row md-w-50 align-items-center p-2 justify-content-center md-w-50 md-h-50">
                  <div className="mx-auto p-3">
                    <h1 className="presentacion-h1 mb-4 text-start">BookNest</h1>
                    <p className="fs-5 fs-md-1 text-wrap text-justify ">
                      Imagina tener una biblioteca siempre contigo: BookNest es una aplicación que te permite organizar y gestionar tus libros favoritos de forma sencilla, en cualquier momento y lugar. Con esta herramienta puedes categorizar tus lecturas, marcar páginas importantes, hacer anotaciones y sincronizar tus progresos entre distintos dispositivos.
                    </p>
                  </div>   
              </div>
              <div className="d-flex mx-auto ml-2 p-3 md-w-50 md-h-50 justify-content-center align-items-center">
                    <img src="/public/imgs/libros4.png" className="img-fluid w-50 md-w-80 h-auto" alt="Placeholder"/>
              </div>
          </div>


          <div className="explicacion container p-4 d-flex flex-column mx-auto m-2 mb-4 md-p-8 shadow rounded g-0">
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                  <div className="align-items-center justify-content-center mx-auto p-3 md-w-50 md-h-50">
                    <img src="/imgs/libros3.png" className="img-fluid w-50 h-auto" alt="Placeholder"/>
                  </div> 
                  <div className="mx-auto p-3 md-w-50 md-h-50">
                    <p className="fs-5 fs-md-1 text-wrap text-justify ">Ideal tanto para los grandes lectores como para aquellos que quieren leer más, esta aplicación te ayuda a gestionar y disfrutar tu colección de libros digitales de la forma más sencilla posible.
                    </p>
                  </div> 
              </div>
          </div>


          <div className="presentacion container border rounded p-4 d-flex flex-column mx-auto m-2 mb-4 g-0">
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                  <div className="mx-auto p-3 md-w-50 md-h-50">
                      <p className="fs-5 fs-md-1 text-wrap text-justify">Es perfecta para mejorar tu hábito de lectura, ya que te permite fijar objetivos, hacer un seguimiento de tu progreso y mantenerte motivado. Tener siempre tus libros organizados lo que hace más fácil dedicar tiempo a la lectura y convertirla en un hábito diario.
                      </p>
                  </div>
                  <div className="align-items-center justify-content-center mx-auto p-3 md-w-50 md-h-50">
                      <img src="/imgs/libros1.png" className="img-fluid w-75 h-auto" alt="Placeholder"/>
                  </div> 
              </div>
          </div>


          <div className="explicacion explicacion--amarillo container p-4 d-flex flex-column mx-auto m-2 shadow rounded g-0">
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                  <div className="align-items-center justify-content-center mx-auto p-3 md-w-50 md-h-50">
                    <img src="/imgs/recurso2.png" className="img-fluid w-50 h-auto" alt="Placeholder"/>
                  </div> 
                  <div className="mx-auto p-3 md-w-50 md-h-50">
                    <p className="fs-5 fs-md-1 text-wrap text-justify ">Ideal tanto para los grandes lectores como para aquellos que quieren leer más, esta aplicación te ayuda a gestionar y disfrutar tu colección de libros digitales de la forma más sencilla posible.</p>
                  </div> 
              </div>
          </div>

      </section> 

    

      <div className="app gap-4 pb-3 mx-auto d-flex flex-column justify-content-center align-items-center text-center rounded min-vh-80">
            <div className="max-vw-100 pb-2 mx-auto grid row text-center justify-content-center gap-2 align-items-center">
                  <h1 className="app-h1 vw-100 row-10 mt-5 p-2 text-center p-3 text-wrap rounded col-md-9 md-w-100">BookShelf</h1>
                  <h3 className="app-h3 row-10 lh-base p-2 fs-4 md-w-30 text-center p-3 text-wrap rounded col-md-9 md-w-50">Deja tus libros donde quieras, sin preocuparte por el espacio... Es Rent Free, tanto para tus libros como para tu mente</h3>
            </div>
            
            <h5 className="app-h5 fs-6 mt-2 text-wrap rounded">Pulsa aquí para <br /> añadir una nueva lectura...</h5>
            <button type="button" className="app-button btn btn-link p-0 border-0 mt-1 mb-2" 
                    onClick={() => {
                          setFormularioOn(!formularioOn)
                    }}
            >{ formularioOn ? <i className="app-icon fs-1 p-6 bi bi-arrow-up-circle-fill"></i> : <i className="app-icon fs-1 p-6 bi bi-plus-circle-fill"></i> }</button>

            {formularioOn ? <Formulario /> : null}
      </div>
      
      <div className="app-container gap-4 pb-4 mx-auto d-flex flex-column justify-content-center align-items-center">
      
          <h3 className="app-h3 app-h3--libros p-3 container text-center mx-auto  mb-1">BookList</h3>

          <div className=" container gap-1 pb-3 mx-auto d-flex flex-column justify-content-center align-items-center">
            <Tarjeta />

            <Tarjeta />

            <Tarjeta />
          </div>
      </div>

      <Footer />
    
    </>
  )
}

export default App;