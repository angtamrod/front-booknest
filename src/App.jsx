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


      {/* <div className="foto container-fluid d-flex align-items-center justify-content-center vh-100 vw-100 mb-4 mt-0 rounded">
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
      </div> */}

      <div className="app container mx-auto d-flex flex-column justify-content-center align-items-center text-center mt-5 p-3 min-vh-95">
            <h1 className="app-h1 fs-1 text-center p-4 text-wrap rounded">Deja tus libros donde quieras, sin preocuparte por el espacio... Es Rent Free, tanto para tus estantes como para tu mente</h1>
            <h5 className="app-h5 fs-6 p-6 mt-4 p-6 text-wrap">Pulsa aquí para añadir <br /> una nueva lectura...</h5>
            <button type="button" className="app-button btn btn-link p-0 border-0 mt-1" 
                    onClick={() => {
                          setFormularioOn(!formularioOn)
                    }}
            ><i className="app-icon fs-1 bi bi-arrow-down-circle-fill"></i></button>
      </div>
      
      {formularioOn ? <Formulario /> : null}
      
     {/*  <div className="tarjeta container mx-auto p-4 d-flex flex-column flex-md-row justify-content-between rounded shadow md-mr-10 md-ml-10">
              <div className="card-body flex-grow-1 ms-3">
                    <h3 className="tarjeta-h3 card-title fs-2 mb-4">Una corte de rosas y espinas</h3>
                    <p className="card-text"><strong>Género:</strong> Fantasía</p>
                    <p className="card-text"><strong>Puntuación:</strong> 5 estrellas⭐</p>  
                    <p className="card-text"><strong>Progreso:</strong> Leyendo...📖</p>  
                    <h4 className="tarjeta-h4 fs-5">Sinopsis</h4>
                    <p className="card-text text-justify">Una corte de rosas y espinas, escrita por Sarah J. Maas, es una novela de fantasía que sigue a Feyre Archeron, una joven cazadora que vive en un mundo dividido entre humanos y criaturas mágicas conocidas como fae. Un día, Feyre mata a un lobo en el bosque, sin saber que era una criatura fae disfrazada. Poco después, Tamlin, un alto fae y señor de la Corte Primavera, la toma como prisionera como castigo por su acción.</p>
                    <h4 className="tarjeta-h4 fs-5 ">Reseña</h4>
                    <p className="card-text text-justify">No tenía mucha esperanza con esta saga, pero se ha convertido en un imprescindible en mi estantería, es pura fantasía, con un toque más adulto, o más bien spicy</p> 
                    <div className="d-grid mt-4 d-md-flex justify-content-md-end">
                        <button className="tarjeta-boton btn" type="button">Editar</button>
                    </div>  
              </div>
      </div> */}

      <Tarjeta />

      <Footer />
    
    </>
  )
}

export default App;