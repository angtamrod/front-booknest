/**-----------------------------------------------------------------------------
 * APP.JSX
 * 
 * hooks: -useEffect: Para ejecutar el cambio de color de fondo para cuando se monta el componente
 *        -useState: Para crear estados que gestionen la cumplimentación de datos para la implementación de los datos traidos del back, y los almacena en un array llamado libros
 * 
 * Datos: fetch a API situada en "https://back-booknest.onrender.com/api/libros/"
 * Estructura:
 *      - Navbar
 *      - App
 *      - Footer
 * 
 -------------------------------------------------------------------------------*/


//importamos hooks y componentes 
import { useEffect,useState } from "react";

import BotonScroll from "./components/BotonScroll.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Formulario from "./components/Formulario.jsx";
import Tarjeta from "./components/Tarjeta.jsx";


function App() {

    //Estado para mostrar y esconder el formulario
    let [formularioOn,setFormularioOn] = useState(false)
    //Estado para almacenar los libros que recibimos de la API
    let [libros,setLibros] = useState([])
  

    

    //Usamos useEffect para hacer un fetch que nos traiga los libros de la API
      useEffect(() => {

        //variable de entorno para la ruta de liblos
        //const { VITE_LIBROS } = import.meta.env
        //Recoge el id del usuario del sessionStorage
        const usuario_id = sessionStorage.getItem("usuario_id")
        
        let controller = new AbortController()

        //El fetch solo se hace si existe un usuario_id
        if(usuario_id){
          fetch( "https://back-booknest.onrender.com/api/libros/" + usuario_id)
          .then(respuesta => respuesta.json())
          .then(libros => setLibros(libros))
          .catch(err => console.log(err))
          .finally(() => controller.abort())
        }
        
      }, [])//Esto garantiza que se renderice solo una vez cuando se monta el componente


      /**
       * Función para añadir un nuevo libro a la lista
       * 
       * @param {Object} libro -Objeto que contiene los datos del libro
       */
      function nuevoLibro(libro){
        setLibros([...libros,libro])
      }

      /**
       * Función para eliminar un libro de la lista
       * 
       * @param {string} id - Id del libro a eliminar
       */
      function borrarLibro(id){
        setLibros(libros.filter( libros => {
          return libros.id != id
        }))
      }
    

      /**
       * Función para actualizar los datos de un libro de la lista
       * 
       * @param {string} id - Id del libro a eliminar
       * @param {Object} elementosActualizados - Objeto con los campos modificados
       */
      function actualizarLibro(id,elementosActualizados){
        setLibros(libros.map((libro) => {
          if(libro.id === id){
            return {...libro, ...elementosActualizados}
          }
          return libro
        }))
      }

   
  
  return (
    <>

   {/*  Navbar(barra de navegación principal) */}
    <Navbar />
    {/* Contenido principal de la aplicación */}
    <main className="app">
        <BotonScroll />{/* Botón para desplazarse hacia arriba */}
        {/* Sección de bienvenida y formulario */}
        <section className="app-azul gap-4 pb-3 mx-auto d-flex flex-column justify-content-center align-items-center text-center rounded min-vh-80">
              <div className="max-vw-100 pb-2 mx-auto grid row text-center justify-content-center gap-2 align-items-center">
                    <h1 className="app-h1 col-12 mt-5 p-2 text-center text-wrap rounded fs-1 ">BookPack</h1>
                    <div className="container md-p-5 d-flex justify-content-center align-items-center">
                      <h3 className="app-h3 col-12 lh-base fs-5 p-1 text-center text-wrap rounded">Deja tus libros donde quieras, sin preocuparte por el espacio... Es Rent Free, tanto para tus libros como para tu mente</h3>
                    </div>
              </div>
              
              {/* Botón para mostrar el formulario */}
              <h5 className="app-h5 fs-6 mt-2 text-wrap rounded">Pulsa aquí para <br /> añadir una nueva lectura...</h5>
              <button type="button" title="Añadir una lectura" className="app-button btn btn-link p-0 border-0 mt-1 mb-2" 
                      onClick={() => {
                            setFormularioOn(!formularioOn)
                      }}
              >{ formularioOn ? <i className="app-icon fs-1 p-6 bi bi-arrow-up-circle-fill"></i> : <i className="app-icon fs-1 p-6 bi bi-plus-circle-fill"></i> }</button>

              {formularioOn ? <Formulario nuevoLibro={nuevoLibro} /> : null}
        </section>

        
        {/* Sección para mostrar los libros almacenados o si no hay una pequeña explicación */}

        {/*Muestra los libros almacenados de manera inversa para que el último libro que añade se vea el primero de la lista */}
        <section className="app-amarillo gap-4 pb-4 mx-auto d-flex flex-column justify-content-center align-items-center">
            
           { libros==false ? (<div className="p-3 max-vw-100 pb-2 mx-auto grid row text-center justify-content-center gap-2 align-items-center">
                                  <h3 className="app-h3 app-h3--vacio col-12 mt-5 p-2 text-center text-wrap rounded fs-1 ">Uppss... Nos has pillado sin nada.</h3>
                                  <div className="container md-p-5 d-flex justify-content-center align-items-center">
                                    <p className="app-p col-12 lh-base fs-5 p-1 text-center text-wrap rounded">¡Deprisa! Llena tu BookPack de libros que te gusten, que te hagan viajar, que sean tus favoritos, o incluso de los que no te hayan gustado nada</p>
                                  </div>
                            </div>) 
                        : (<div className=" container gap-1 mt-4 pb-3 mx-auto d-flex flex-column justify-content-center align-items-center">
                              { libros.slice().reverse().map(({id,titulo,opinion,tematica,progreso,puntuacion}) => <Tarjeta key={id} 
                                                                                                                            id={id} 
                                                                                                                            titulo={titulo}                         
                                                                                                                            opinion={opinion} 
                                                                                                                            tematica={tematica}
                                                                                                                            progreso={progreso}
                                                                                                                            puntuacion={puntuacion}
                                                                                                                            borrarLibro={borrarLibro}
                                                                                                                            actualizarLibro={actualizarLibro}/>
                              )} 
                            </div>)}


          
        </section> 

      


    </main>
    

    <Footer />
    
    </>
  )
}

export default App;