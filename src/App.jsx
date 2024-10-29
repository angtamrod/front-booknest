import { useEffect,useState } from "react";

import BotonScroll from "./components/BotonScroll.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Formulario from "./components/Formulario.jsx";
import Tarjeta from "./components/Tarjeta.jsx";


function App() {

    let [formularioOn,setFormularioOn] = useState(false)
    let [libros,setLibros] = useState([])
    // let [busqueda,setBusqueda] = useState("")

    

      useEffect(() => {

        const usuario_id = sessionStorage.getItem("usuario_id")
        let controller = new AbortController()

        if(usuario_id){
          fetch("http://localhost:3000/api/libros/" + usuario_id)
          .then(respuesta => respuesta.json())
          .then(libros => setLibros(libros))
          .catch(err => console.log(err))
          .finally(() => controller.abort())
        }
        
      }, []) 

      function nuevoLibro(libro){
        setLibros([libro,...libros])
      }

      function borrarLibro(id){
        setLibros(libros.filter( libros => {
          return libros.id != id
        }))
      }
    
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

    <Navbar />
    <main>
        <BotonScroll />
        <section className="app gap-4 pb-3 mx-auto d-flex flex-column justify-content-center align-items-center text-center rounded min-vh-80">
              <div className="max-vw-100 pb-2 mx-auto grid row text-center justify-content-center gap-2 align-items-center">
                    <h1 className="app-h1 col-12 mt-5 p-2 text-center text-wrap rounded fs-1 ">BookPack</h1>
                    <div className="container md-p-5 d-flex justify-content-center align-items-center">
                      <h3 className="app-h3 col-12 lh-base fs-5 p-1 text-center text-wrap rounded">Deja tus libros donde quieras, sin preocuparte por el espacio... Es Rent Free, tanto para tus libros como para tu mente</h3>
                    </div>
              </div>
              
              <h5 className="app-h5 fs-6 mt-2 text-wrap rounded">Pulsa aquí para <br /> añadir una nueva lectura...</h5>
              <button type="button" title="Añadir una lectura" className="app-button btn btn-link p-0 border-0 mt-1 mb-2" 
                      onClick={() => {
                            setFormularioOn(!formularioOn)
                      }}
              >{ formularioOn ? <i className="app-icon fs-1 p-6 bi bi-arrow-up-circle-fill"></i> : <i className="app-icon fs-1 p-6 bi bi-plus-circle-fill"></i> }</button>

              {formularioOn ? <Formulario nuevoLibro={nuevoLibro} /> : null}
        </section>

        
        
        <section className="app-container gap-4 pb-4 mx-auto d-flex flex-column justify-content-center align-items-center">
            {/* <form className="app-input container-sm input-group shadow rounded" onSubmit={ (evento) => {
                evento.preventDefault()
                const usuario_id = sessionStorage.getItem("usuario_id")
                  if(busqueda.trim() !== ""){
                    fetch(`http://localhost:3000/api/libros/busqueda/${usuario_id}/${busqueda}`)
                    .then(respuesta => console.log(respuesta))
                    .then(librosFiltrados => setLibros(librosFiltrados))
                    
                  }else{
                    fetch("http://localhost:3000/api/libros/" + usuario_id)
                      .then(respuesta => respuesta.json())
                      .then(libros => {
                        setLibros(libros) 
                      })
                  }

            }}>
                <input type="text" className="form-control fs-4" placeholder="Busca por título..." value={busqueda} onChange={(evento) => setBusqueda(evento.target.value)}/>
                <button className="app-button btn btn-outline-secondary" type="submit" id="button-addon2"><i className=" fs-4 bi bi-search-heart-fill"></i></button>
            </form> */}
           { libros==false ? (<div className="p-3 max-vw-100 pb-2 mx-auto grid row text-center justify-content-center gap-2 align-items-center">
                                  <h3 className="app-h3 app-h3--vacio col-12 mt-5 p-2 text-center text-wrap rounded fs-1 ">Uppss... Nos has pillado sin nada.</h3>
                                  <div className="container md-p-5 d-flex justify-content-center align-items-center">
                                    <p className="app-p col-12 lh-base fs-5 p-1 text-center text-wrap rounded">¡Deprisa! Llena tu BookPack de libros que te gusten, que te hagan viajar, que sean tus favoritos, o incluso de los que no te hayan gustado nada</p>
                                  </div>
                            </div>) 
                        : (<div className=" container gap-1 mt-4 pb-3 mx-auto d-flex flex-column justify-content-center align-items-center">
                              { libros.reverse().map(({id,titulo,opinion,tematica,progreso,puntuacion}) => <Tarjeta key={id} 
                                                                                                            id={id} 
                                                                                                            titulo={titulo}                         opinion={opinion} 
                                                                                                            tematica={tematica}
                                                                                                            progreso={progreso}
                                                                                                            puntuacion={puntuacion}
                                                                                                            borrarLibro={borrarLibro}
                                                                                                            actualizarLibro={actualizarLibro}/>
                              )} 
                            </div>)}


            {/* <div className=" container gap-1 mt-4 pb-3 mx-auto d-flex flex-column justify-content-center align-items-center">
            { libros.map(({id,titulo,opinion,tematica,progreso,puntuacion}) => <Tarjeta key={id} 
                                                                                          id={id} 
                                                                                          titulo={titulo}                                           opinion={opinion} 
                                                                                          tematica={tematica}
                                                                                          progreso={progreso}
                                                                                          puntuacion={puntuacion}
                                                                                          borrarLibro={borrarLibro}
                                                                                          actualizarLibro={actualizarLibro}/>
             ) } 
            </div> */}
        </section> 

      {/*   <section className="app-container gap-4 pb-4 mx-auto d-flex flex-column justify-content-center align-items-center">
            <div className=" container gap-1 mt-4 pb-3 mx-auto d-flex flex-column justify-content-center align-items-center">
            { libros.slice().reverse().map( ({id,titulo,opinion,tematica,progreso,puntuacion}) => <Tarjeta key={id} 
                                                                                          id={id} 
                                                                                          titulo={titulo}                                           opinion={opinion} 
                                                                                          tematica={tematica}
                                                                                          progreso={progreso}
                                                                                          puntuacion={puntuacion}
                                                                                          borrarLibro={borrarLibro}
                                                                                          actualizarLibro={actualizarLibro}/>
             ) } 
            </div>
        </section> */}


    </main>
    

    <Footer />
    
    </>
  )
}

export default App;