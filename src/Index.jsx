import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";



function Index() {


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
            <img src="/imgs/recurso1.png" className="img-fluid w-80 h-auto" alt="Placeholder"/>
        </div>
    </div>


    <div className="explicacion container p-4 d-flex flex-column mx-auto m-2 mb-4 md-p-8 shadow rounded g-0">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="align-items-center justify-content-center mx-auto p-3 md-w-50 md-h-50">
            <img src="/imgs/recurso3.png" className="img-fluid w-50 h-auto" alt="Placeholder"/>
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
            <img src="/imgs/recurso4.png" className="img-fluid w-75 h-auto" alt="Placeholder"/>
            </div> 
        </div>
    </div>


    <div className="explicacion explicacion--amarillo container p-4 d-flex flex-column mx-auto m-2 mb-4 shadow rounded g-0">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="align-items-center justify-content-center mx-auto p-3 md-w-50 md-h-50">
            <img src="/imgs/recurso2.png" className="img-fluid w-50 h-auto" alt="Placeholder"/>
            </div> 
            <div className="mx-auto p-3 md-w-50 md-h-50">
            <p className="fs-5 fs-md-1 text-wrap text-justify ">Ideal tanto para los grandes lectores como para aquellos que quieren leer más, esta aplicación te ayuda a gestionar y disfrutar tu colección de libros digitales de la forma más sencilla posible.</p>
            </div> 
        </div>
    </div>

    <Footer /> 

    </>
 
  )
};

export default Index;
