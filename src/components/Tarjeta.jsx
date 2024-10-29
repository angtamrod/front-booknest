
//Importamos hooks
import {  useState } from "react";


/**
 * Componente Tarjeta.
 * Este componente muesta una tarjeta que contiene toda la información del libro
 * 
 * Ofrece opciones de actualización y eliminación de la tarjeta
 * 
 * Esta función envía los datos a una api y añade el libro resultante a la lista de libros de la App.jsx
 * 
 * @param {string} id - Id del libro
 * @param {string} titulo - Titulo del libro
 * @param {string} opinion - Opinión sobre el libro
 * @param {string} tematica - Temática del libro
 * @param {string} progreso - Progreso del libro
 * @param {number} puntuacion - Puntuación del libro
 * @param {Function} borrarLibro - Función para eliminar un libro de la lista
 * @param {Function} actualizarLibro - Función para actualizar los datos del libro en la lista
 */

function Tarjeta({id,titulo,opinion,tematica,progreso,puntuacion,borrarLibro,actualizarLibro}) {

    //Un estado booleano que hace que se muestre la tarjeta en modo editar o en modo normal
    let [editar,setEditar] = useState(false)

    //Los estados que recogen los datos de la actualización de la tarjeta
    let [nuevoTitulo,setNuevoTitulo] = useState(titulo)
    let [nuevaOpinion,setNuevaOpinion] = useState(opinion)
    let [nuevaTematica,setNuevaTematica] = useState(tematica)
    let [nuevoProgreso,setNuevoProgreso] = useState(progreso)
    let [nuevaPuntuacion,setNuevaPuntuacion] = useState(puntuacion)
   

    //Variables de entorno para las rutas de actualizar y de borrar
    //const { VITE_ACTUALIZAR,VITE_BORRAR } = import.meta.env
    let controlador = new AbortController()

    let configuracionBorrar = {
                                    method : "DELETE",
                                    
                              }

    
    //En este caso en vez de hacer un onclick directamente lo he puesto como una función inpendiente para no saturar el código
    //Esta función hace un fetch a la API para actualizar los datos del libro
    let funcionActualizarLibro = () => {
            
            //Creamos un objeto vacío donde almacenaremos los datos actualizados resultantes
            let elementosActualizados = {}

            //Estas comprobaciones se hacen para que si el estado nuevoTitulo y el titulo pasado como prop, no coinciden el título del elementosActualizados será el nuevo título y así con cada dato
            if(nuevoTitulo !== titulo){
                elementosActualizados.titulo = nuevoTitulo
            }

            if(nuevaOpinion !== opinion){
                elementosActualizados.opinion = nuevaOpinion
            }

            if(nuevaTematica !== tematica){
                elementosActualizados.tematica = nuevaTematica
            }

            if(nuevoProgreso !== progreso){
                elementosActualizados.progreso = nuevoProgreso
            }

            if(nuevaPuntuacion !== puntuacion){
                elementosActualizados.puntuacion = nuevaPuntuacion
            }

            let opcionesConfiguracion = {
                                            method: "PUT",
                                            body: JSON.stringify(elementosActualizados),
                                            headers : {
                                                "Content-Type" : "application/json"
                                            },
                                            signal : controlador.signal
                                        }

            {/*aenterior ruta: http://localhost:3000/api/registro */ }
            if(nuevoTitulo !== titulo || nuevaOpinion !== opinion || nuevaTematica !== tematica || nuevoProgreso !== progreso || nuevaPuntuacion !== puntuacion){
                fetch("https://back-booknest.onrender.com/api/libros/actualizar/" + id, opcionesConfiguracion)
                .then(respuesta => respuesta.json())
                .then(({ error,resultado }) => {
                        if(!error && resultado === "ok"){
                            actualizarLibro(id,elementosActualizados)
                            setEditar(false)
                        }
                        console.log("....Error intentando actualizar el libro")
                        
                })
                .catch(err => console.log(err))
                .finally(() => controlador.abort())
    
            }else{
                setEditar(false)
            } 

            
    }
    
  
  return (
    <>

      {/* en este caso he utilizado el two way biding para conectar los valores que recogemos con el evento onChange con el estado que hemos designado para cada dato que vamos a almacenar */}
      <section className="tarjeta container mx-auto mt-2 mb-4 p-4 d-flex flex-column rounded shadow">
              <div className="card-body flex-grow-1 ">
                    { editar ? (<h1 className="editar-h1 text-center mb-2">Editar</h1>) : "" }
                    { editar ? (<input type="text" className="editar-inputs form-control mt-1 mb-2" id="editarTitulo" placeholder="Cambia el título" value={nuevoTitulo}
                                onChange={(evento) => setNuevoTitulo(evento.target.value)}/>) 
                             : <h3 className="tarjeta-h3 ms-2 card-title w-100 text-wrap fs-2 mb-4"> {titulo}</h3> }
                    
                    { editar ? (<div className="input-group mt-1 mb-2">
                                    <select className="editar-inputs form-select" id="editarProgreso" value={nuevaTematica}
                                            onChange={(evento) => setNuevaTematica(evento.target.value)}>
                                        <option value="">Cambia la temática...</option>
                                        <option value="Ciencia Ficción🛸">Ciencia Ficción🛸</option>
                                        <option value="Fantasía🧙‍♂️">Fantasía🧙‍♂️</option>
                                        <option value="Thriller🕵️">Thriller🕵️</option>
                                        <option value="Histórica📚">Histórica📚</option>
                                        <option value="Terror👻">Terror👻</option>
                                        <option value="Comedia🤣">Comedia🤣</option>
                                        <option value="Poesía🌹">Poesía🌹</option>
                                        <option value="Romance💖">Romance💖</option>
                                        <option value="No ficción👩‍🎓">No ficción👩‍🎓</option>
                                    </select>
                                    
                        
                                </div>) 
                             : <p className="ms-2 card-text"><strong className="fs-6">Temática:</strong> {tematica}</p> }

                    { editar ? (<div className="d-flex justify-content-center m-3">
                                    <div className="grid text-center">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuacion1" value="1" checked={nuevaPuntuacion === 1} 
                                            onChange={() => setNuevaPuntuacion(1)}/>
                                            <label className="form-check-label editar-label" htmlFor="nuevaPuntuacion1" >1⭐</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuacion2" value="2" checked={nuevaPuntuacion === 2} 
                                            onChange={() => setNuevaPuntuacion(2)}/>
                                            <label className="form-check-label editar-label" htmlFor="nuevaPuntuacion2">2⭐</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuacion3" value="3" checked={nuevaPuntuacion === 3} 
                                            onChange={() => setNuevaPuntuacion(3)}/>
                                            <label className="form-check-label editar-label" htmlFor="nuevaPuntuacion3">3⭐</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuacion4" value="4" checked={nuevaPuntuacion === 4} 
                                            onChange={() => setNuevaPuntuacion(4)}/>
                                            <label className="form-check-label editar-label" htmlFor="nuevaPuntuacion4">4⭐</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuacion5" value="5" checked={nuevaPuntuacion === 5} 
                                            onChange={() => setNuevaPuntuacion(5)}/>
                                            <label className="form-check-label editar-label" htmlFor="nuevaPuntuacion5">5⭐</label>
                                        </div>
                                    </div>
                                </div>) 
                             : <p className=" ms-2 card-text"><strong className="fs-6">Puntuación:</strong> {puntuacion} estrellas ⭐</p> }
                    
                    { editar ? (<div className="input-group mb-2">
                                    <select className="editar-inputs form-select" id="editarProgreso"  value={nuevoProgreso}
                                            onChange={(evento) => setNuevoProgreso(evento.target.value)}>
                                        <option value="">Cambia tu progreso...</option>
                                        <option value="Sin empezar 🫢">Sin empezar 🫢</option>
                                        <option value="Estoy en ello...📖">Estoy en ello...📖</option>
                                        <option value="Terminado ✌️">Terminado ✌️</option>
                                    </select>
                                </div>) 
                             : <p className="ms-2 card-text"><strong className="fs-6">Progreso:</strong> {progreso}</p> }  
                    { editar ? "" : <h3 className="ms-2 tarjeta-h3 fs-6 ">Reseña</h3>}  
                    { editar ? (<div className="editar-cuadros col-12 mt-1 mb-1">  
                                    <textarea className="editar-inputs form-control" placeholder="Todo el mundo puede cambiar de opinión...😉" id="editarOpinion" value={nuevaOpinion}
                                    onChange={(evento) => setNuevaOpinion(evento.target.value)}></textarea> 
                                </div>) 
                            : <p className="tarjeta-texto scroll-vertical ms-2 text-wrap card-text text-justify mb-3">{opinion}</p> }
                    
                    <div className="d-grid gap-1 mt-4 d-md-flex justify-content-md-end">
                        <button className="tarjeta-boton btn me-md-2" type="button"
                                onClick={() => {
                                    if(editar){
                                        funcionActualizarLibro()
                                    }else{
                                        setEditar(true)
                                    }

                                }}
                        >{ editar ? "Actualizar" : "Editar"}</button>
                        {/* antigua ruta: http://localhost:3000/api/libros/borrar/ */}
                    
                        { editar ? "" : (<button className="tarjeta-boton tarjeta-boton--borrar btn" type="button" 
                                                    onClick={() => {
                                                                    fetch("https://back-booknest.onrender.com/api/libros/borrar/" + id, configuracionBorrar)
                                                                        .then(respuesta => respuesta.json())
                                                                        .then(({error, resultado}) => {
                                                                                if(!error && resultado == "ok"){
                                                                                    return borrarLibro(id)   
                                                                                }
                                                                                console.log("...Error intentando borrar el libro")       
                                                                        })
                                                                        .catch(err => console.log(err))
                                                                        .finally(() => controlador.abort())

                                } }>Borrar</button>)}
                    </div>  
              </div>
      </section>

    </>
  )
}

export default Tarjeta;