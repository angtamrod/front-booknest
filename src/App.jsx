import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function App() {


  
  return (
    <>

      <Navbar />


      <div className="foto container-fluid d-flex align-items-center justify-content-center vh-100 vw-100 mb-4 mt-0 rounded">
          <a className="foto-texto text-light card p-4 bg-opacity-50 shadow rounded-pill" href="#">
              <h1 className="fs-1 text-center">Comienza con BookNest</h1>
          </a>
      </div>


      <div className="presentacion container p-2 d-flex flex-column flex-md-row mx-auto m-2 mb-4 bt-1 bb-1 rounded g-0">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center md-w-50 md-h-50">
              <div className="mx-auto p-3">
                <h1 className="presentacion-h1 mb-4">BookNest</h1>
                <p className="fs-5 fs-md-1 text-wrap text-justify ">
                  Imagina tener una biblioteca siempre contigo: BookNest es una aplicación que te permite organizar y gestionar tus libros favoritos de forma sencilla, en cualquier momento y lugar. Con esta herramienta puedes categorizar tus lecturas, marcar páginas importantes, hacer anotaciones y sincronizar tus progresos entre distintos dispositivos.
                </p>
              </div>   
          </div>
          <div className="mx-auto p-3 md-w-50 md-h-50">
                <img src="/public/imgs/recurso1.png" className="img-fluid w-80 h-auto" alt="Placeholder"/>
          </div>
      </div>


      <div className="explicacion container p-4 d-flex flex-column mx-auto m-2 mb-4 md-p-8 shadow rounded g-0">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
              <div className="align-items-center justify-content-center mx-auto p-3 md-w-50 md-h-50">
                <img src="/public/imgs/recurso3.png" className="img-fluid w-50 h-auto" alt="Placeholder"/>
              </div> 
              <div className="mx-auto p-3 md-w-50 md-h-50">
                <p className="fs-5 fs-md-1 text-wrap text-justify ">Ideal tanto para los grandes lectores como para aquellos que quieren leer más, esta aplicación te ayuda a gestionar y disfrutar tu colección de libros digitales de la forma más sencilla posible.
                </p>
              </div> 
          </div>
      </div>


      <div className="presentacion container p-4 d-flex flex-column mx-auto m-2 mb-4 g-0">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
              <div className="mx-auto p-3 md-w-50 md-h-50">
                <p className="fs-5 fs-md-1 text-wrap text-justify">Es perfecta para mejorar tu hábito de lectura, ya que te permite fijar objetivos, hacer un seguimiento de tu progreso y mantenerte motivado. Tener siempre tus libros organizados lo que hace más fácil dedicar tiempo a la lectura y convertirla en un hábito diario.</p>
              </div>
              <div className="align-items-center justify-content-center mx-auto p-3 md-w-50 md-h-50">
                <img src="/public/imgs/recurso4.png" className="img-fluid w-75 h-auto" alt="Placeholder"/>
              </div> 
          </div>
      </div>


      <div className="explicacion explicacion--amarillo container p-4 d-flex flex-column mx-auto m-2 mb-4 shadow rounded g-0">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
              <div className="align-items-center justify-content-center mx-auto p-3 md-w-50 md-h-50">
                <img src="/public/imgs/recurso2.png" className="img-fluid w-50 h-auto" alt="Placeholder"/>
              </div> 
              <div className="mx-auto p-3 md-w-50 md-h-50">
                <p className="fs-5 fs-md-1 text-wrap text-justify ">Ideal tanto para los grandes lectores como para aquellos que quieren leer más, esta aplicación te ayuda a gestionar y disfrutar tu colección de libros digitales de la forma más sencilla posible.</p>
              </div> 
          </div>
      </div>




      
      <form className="formulario container mx-auto row g-3 shadow g-0 p-5 rounded">

          <h1 className="formulario-h1 text-center">Nueva Lectura</h1>

          <div className="formulario-cuadros col-12">
            <label htmlFor="inputAddress" className="formulario-label form-label">Titulo del libro</label>
            <input type="text" className="formulario-inputs form-control" id="inputAddress" placeholder="El guardian entre el centeno..."/>
          </div>

          <div className="formulario-cuadros col-12">
            <label htmlFor="inputAddress2" className="formulario-label form-label">Sinopsis</label>
            <textarea className="formulario-inputs form-control" placeholder="Pequeño resumen" id="floatingTextarea"></textarea> 
          </div>


          <div className="formulario-cuadros col-12">  
            <label htmlFor="inputAddress2" className="formulario-label form-label">Reseña sobre el libro</label>
            <textarea className="formulario-inputs form-control" placeholder="Deja tu opinión aquí" id="floatingTextarea"></textarea> 
          </div>


          <div className="input-group mb-3">
              <select className=" form-select" id="inputGroupSelect02">
                  <option selected>Elige la temática...</option>
                  <option value="Ciencia Ficción">Ciencia Ficción</option>
                  <option value="Fantasía">Fantasía</option>
                  <option value="Thriller">Thriller</option>
              </select>
              <label className="formulario-label formulario-label--option input-group-text" htmlFor="inputGroupSelect02">Temática</label>
          </div>

          <div className="col-12 mb-3">
              <label className="formulario-label form-label mb-2">Calificación del libro</label>
              <div className="d-flex justify-content-between">
                  <div className="align-items-center column">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                          <label className="form-check-label" htmlFor="inlineRadio1">1<i className="formulario-icon bi bi-star-fill"></i></label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">2<i className="formulario-icon bi bi-star-fill"></i></label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" />
                            <label className="form-check-label" htmlFor="inlineRadio3">3<i className="formulario-icon bi bi-star-fill"></i></label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" />
                          <label className="form-check-label" htmlFor="inlineRadio4">4<i className="formulario-icon bi bi-star-fill"></i></label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5" />
                          <label className="form-check-label" htmlFor="inlineRadio5">5<i className="formulario-icon bi bi-star-fill"></i></label>
                        </div>
                  </div>

                  <div className="form-check form-switch pr-5">
                        <label className="formulario-label formulario-label--switch form-check-label fs-6" htmlFor="flexSwitchCheckDefault">Terminado</label>
                        <input className="form-check-input w-30 h-30" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  </div>
              </div>
          </div>

          <div className="d-grid gap-2">
                <button className="formulario-boton formulario-boton--reset btn btn-primary" type="submmit">Guardar</button>
          </div>
  
      </form>


      <Footer />
    
    </>
  )
}

export default App;