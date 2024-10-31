/**-----------------------------------------------------------------------------
 * INDEX.JSX
 * 
 * hooks: Link
 * 
 * Componentes: - Navbar
 *              - Footer
 *              - BotonSroll: Botón para subir hacia arriba en la página
 * Estructura:
 *      - Navbar
 *      - Foto-link
 *      - Presentacion
 *      - Footer
 * 
 -------------------------------------------------------------------------------*/


//Importacuón hooks y componentes
import { Link } from "react-router-dom";
import BotonScroll from "./components/BotonScroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function Index() {


  return (

    <>
    
    <Navbar />
    
    <BotonScroll />
    {/* Sección que muesta una foto de bienvenida y un botón que te lleva a la sección BookPack (App.jsx) */}
    <section className="foto container-fluid d-flex align-items-center justify-content-center vh-100  mb-4 mt-0 rounded">
          <Link to="/bookpack" className="foto-texto card p-4 bg-opacity-50 shadow rounded-pill" title="Ir a BookPack">
              <h1 className="foto-link fs-1 text-center">Comienza tu aventura</h1>
          </Link>
    </section>

    {/* Sección de presentación  */}
    <section className="introduccion gap-4 pb-3 mx-auto d-flex flex-column justify-content-center align-items-center text-center rounded">
            <div className="presentacion container gap-2 rounded p-2 d-flex flex-column flex-md-row mx-auto m-2 mb-4 bt-1 bb-1 rounded g-0">
                  <div className="d-flex flex-column flex-md-row md-w-50 align-items-center justify-content-center md-w-50 md-h-50">
                        <div className="mx-auto p-3 ">
                                <h1 className="presentacion-h1 mb-4 text-start">BookNest</h1>
                                <p className=" fs-5 fs-md-1 text-wrap text-justify ">
                                Imagina tener una biblioteca siempre contigo: BookNest es una aplicación que te permite organizar y gestionar tus libros favoritos de forma sencilla, en cualquier momento y lugar. Con esta herramienta puedes categorizar tus lecturas, escribir una pequeña reseña y sincronizar tus progresos entre distintos dispositivos
                                </p>
                        </div>   
                  </div>
                  <div className="d-flex mx-auto justify-content-center align-items-center">
                        <img src="/imgs/libros1.png" className="presentacion-img img-fluid" alt="Foto de estanteria"/>
                  </div>
              </div>


              <div className="presentacion presentacion--azul container p-4 d-flex gap-2 flex-column mx-auto m-2 mb-4 md-p-8 shadow rounded g-0">
                  <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                      <div className="align-items-center justify-content-center mx-auto p-3 md-w-50 md-h-50">
                        <img src="/imgs/libros3.png" className="img-fluid w-50 h-auto" alt="Pila de libros"/>
                      </div> 
                      <div className="mx-auto p-3 md-w-50 md-h-50">
                        <p className="fs-5 fs-md-1 text-wrap text-justify ">Es perfecta para mejorar tu hábito de lectura, ya que te permite fijar objetivos, hacer un seguimiento de tu progreso y mantenerte motivado. Tener siempre tus libros organizados lo que hace más fácil dedicar tiempo a la lectura y convertirla en un hábito diario
                        </p>
                      </div> 
                  </div>
              </div>


              <div className="presentacion presentacion--amarillo container p-4 d-flex flex-column mx-auto m-2 shadow rounded g-0">
                  <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                      <div className="mx-auto p-3 md-w-50 md-h-50">
                          <p className="fs-5 fs-md-1 text-wrap text-justify ">Ideal tanto para los grandes lectores como para aquellos que quieren leer más, esta aplicación te ayuda a gestionar y disfrutar tu colección de libros digitales de la forma más sencilla posible
                          </p>
                      </div> 
                      <div className="align-items-center justify-content-center mx-auto p-3 md-w-50 md-h-50">
                          <img src="/imgs/recurso2.png" className="img-fluid w-50 h-auto" alt="Libro abierto"/>
                      </div> 
                  </div>
              </div>
          </section>

      <Footer /> 

    </>
 
  )
};

export default Index;
