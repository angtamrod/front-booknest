/* 


import {  useState } from "react";


function Tarjeta({id,titulo,opinion,tematica,progreso,puntuacion,borrarLibro}) {

    let [editar,setEditar] = useState(false)
    let [nuevoTitulo,setNuevoTitulo] = useState("")
    let [nuevaOpinion,setNuevaOpinion] = useState("")
    let [nuevaTematica,setNuevaTematica] = useState("")
    let [nuevoProgreso,setNuevoProgreso] = useState("")
    let [nuevaPuntuacion,setNuevaPuntuacion] = useState("")
   

  
  return (
    <>

    { editar ? <form className="tarjeta fs-6 p-3 container mt-2 mx-auto mb-4 row g-3 shadow g-0 rounded md-mr-20">
                <h1 className="editar-h1 text-center">Editar</h1>
                <div className="editar-cuadros col-12">
                    <input type="text" className="formulario-inputs form-control" id="inputAddress" placeholder="El guardian entre el centeno..." value={nuevoTitulo}
                    onChange={(evento) => setNuevoTitulo(evento.target.value)}/>
                    </div>

                    <div className="editar-cuadros col-12">  
                    <textarea className="editar-inputs form-control" placeholder="Deja tu opinión aquí" id="floatingTextarea" value={nuevaOpinion}
                    onChange={(evento) => setNuevaOpinion(evento.target.value)}></textarea> 
                    </div>

                    <div className="input-group mb-1">
                        <select className=" form-select" id="inputGroupSelect02" value={nuevaTematica}
                    onChange={(evento) => setNuevaTematica(evento.target.value)}>
                            <option value="">Elige la temática...</option>
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
                        <label className="editar-label editar-label--option input-group-text" htmlFor="inputGroupSelect02">Temática</label>
                    </div>

                    <div className="input-group mb-2">
                        <label className="editar-label editar-label--option input-group-text" htmlFor="inputGroupSelect02">Progreso</label>
                        <select className=" form-select" id="inputGroupSelect02"  value={nuevoProgreso}
                    onChange={(evento) => setNuevoProgreso(evento.target.value)}>
                            <option value="">Como vas con el libro...</option>
                            <option value="Sin empezar">Sin empezar</option>
                            <option value="Empezado">Empezado</option>
                            <option value="Terminado">Terminado</option>
                        </select>
                    </div>

                    <div className="col-12 mb-2 pr-3">
                        <label className="editar-label form-label mb-2">Puntuación del libro:</label>
                        <div className="d-flex justify-content-between">
                            <div className="grid text-center">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuacion1" value="1" checked={nuevaPuntuacion === 1} 
                                    onChange={() => setNuevaPuntuacion(1)}/>
                                    <label className="form-check-label editar-label--radio" htmlFor="nuevaPuntuacion1" >1⭐</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuacion2" value="2" checked={nuevaPuntuacion === 2} 
                                    onChange={() => setNuevaPuntuacion(2)}/>
                                    <label className="form-check-label editar-label--radio" htmlFor="inlineRadio2">2⭐</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuacion3" value="3" checked={nuevaPuntuacion === 3} 
                                    onChange={() => setNuevaPuntuacion(3)}/>
                                    <label className="form-check-label editar-label--radio" htmlFor="inlineRadio3">3⭐</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuacion4" value="4" checked={nuevaPuntuacion === 4} 
                                    onChange={() => setNuevaPuntuacion(4)}/>
                                    <label className="form-check-label editar-label--radio" htmlFor="inlineRadio4">4⭐</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuaicion5" value="5" checked={nuevaPuntuacion === 5} 
                                    onChange={() => setNuevaPuntuacion(5)}/>
                                    <label className="form-check-label editar-label--radio" htmlFor="inlineRadio5">5⭐</label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="d-grid mt-1 d-md-flex justify-content-md-end">
                        <button className="tarjeta-boton btn" type="button" onClick={() => {setEditar(!editar)}}>{ editar ? "Guardar" : "Editar"}</button>
                    </div> 
                </form> 
      
      : <div className="tarjeta fs-6 container mx-auto mt-2 mb-4 p-4 d-flex flex-column flex-md-row justify-content-between rounded shadow md-mr-10 md-ml-10">
              <div className="card-body flex-grow-1 ms-3">
                    <h3 className="tarjeta-h3 card-title fs-2 mb-4"> {titulo}</h3>
                    <p className="card-text"><strong>Género:</strong> {tematica}</p>
                    <p className="card-text"><strong>Puntuación:</strong> {puntuacion} estrellas ⭐</p>  
                    <p className="card-text"><strong>Progreso:</strong> {progreso}</p>  
                    <h4 className="tarjeta-h4 fs-5 ">Reseña</h4>
                    <p className="card-text text-justify">{opinion}</p> 
                    <div className="d-grid gap-1 mt-4 d-md-flex justify-content-md-end">
                        <button className="tarjeta-boton btn me-md-2" type="button"
                                onClick={() => {setEditar(!editar)}}
                        >{ editar ? "Guardar" : "Editar"}</button>
                        <button className="tarjeta-boton tarjeta-boton--borrar btn" type="button" onClick={() => {
                                fetch("http://localhost:3000/api/libros/borrar/" + id, {
                                        method : "DELETE",
                                        
                                })
                                .then(respuesta => respuesta.json())
                                .then(({error, resultado}) => {
                                        if(!error && resultado == "ok"){
                                             return borrarLibro(id)   
                                        }
                                        console.log("...error al usuario")       
                                })
                        } }>Borrar</button>
                    </div>  
              </div>
      </div>}

    </>
  )
}

export default Tarjeta; */







import {  useState } from "react";


function Tarjeta({id,titulo,opinion,tematica,progreso,puntuacion,borrarLibro,actualizarLibro}) {

    let [editar,setEditar] = useState(false)

    let [nuevoTitulo,setNuevoTitulo] = useState("")
    let [nuevaOpinion,setNuevaOpinion] = useState("")
    let [nuevaTematica,setNuevaTematica] = useState("")
    let [nuevoProgreso,setNuevoProgreso] = useState("")
    let [nuevaPuntuacion,setNuevaPuntuacion] = useState("")
   

    let funcionActualizarLibro = () => {
            

            let elementosActualizados = {}

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
            if(nuevoTitulo !== titulo || nuevaOpinion !== opinion || nuevaTematica !== tematica || nuevoProgreso !== progreso || nuevaPuntuacion !== puntuacion){
                fetch("http://localhost:3000/api/libros/actualizar/" + id, {
                    method: "PUT",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(elementosActualizados)
                })
                .then(respuesta => respuesta.json())
                .then(({ error,resultado }) => {
                        if(!error && resultado === "ok"){
                            actualizarLibro(id,elementosActualizados)
                            setEditar(false)
                        }
                        console.log("Error al actualizar el libro")
                        
                })
    
            }else{
                setEditar(false)
            } 

            

            
    }
    
  
  return (
    <>

      
      <section className="tarjeta container mx-auto mt-2 mb-4 p-4 d-flex flex-column rounded shadow">
              <div className="card-body flex-grow-1 ms-3">
                    { editar ? (<h1 className="editar-h1 text-center mb-2">Editar</h1>) : "" }
                    { editar ? (<input type="text" className="editar-inputs form-control mt-1 mb-2" id="inputAddress" placeholder="Cambia el título" value={nuevoTitulo}
                                onChange={(evento) => setNuevoTitulo(evento.target.value)}/>) 
                             : <h3 className="tarjeta-h3 card-title text-wrap fs-2 mb-4"> {titulo}</h3> }
                    
                    { editar ? (<div className="input-group mt-1 mb-2">
                                    <select className=" form-select" id="inputGroupSelect02" value={nuevaTematica}
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
                             : <p className="card-text fs-5"><strong>Género:</strong> {tematica}</p> }

                    { editar ? (<div className="d-flex justify-content-center m-3">
                                    <div className="grid text-center">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuacion1" value="1" checked={nuevaPuntuacion === 1} 
                                            onChange={() => setNuevaPuntuacion(1)}/>
                                            <label className="form-check-label editar-label--radio" htmlFor="nuevaPuntuacion1" >1⭐</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuacion2" value="2" checked={nuevaPuntuacion === 2} 
                                            onChange={() => setNuevaPuntuacion(2)}/>
                                            <label className="form-check-label editar-label--radio" htmlFor="inlineRadio2">2⭐</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuacion3" value="3" checked={nuevaPuntuacion === 3} 
                                            onChange={() => setNuevaPuntuacion(3)}/>
                                            <label className="form-check-label editar-label--radio" htmlFor="inlineRadio3">3⭐</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuacion4" value="4" checked={nuevaPuntuacion === 4} 
                                            onChange={() => setNuevaPuntuacion(4)}/>
                                            <label className="form-check-label editar-label--radio" htmlFor="inlineRadio4">4⭐</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="nuevasPuntuaciones" id="nuevaPuntuaicion5" value="5" checked={nuevaPuntuacion === 5} 
                                            onChange={() => setNuevaPuntuacion(5)}/>
                                            <label className="form-check-label editar-label--radio" htmlFor="inlineRadio5">5⭐</label>
                                        </div>
                                    </div>
                                </div>) 
                             : <p className="card-text fs-5"><strong>Puntuación:</strong> {puntuacion} estrellas ⭐</p> }
                    
                    { editar ? (<div className="input-group mb-2">
                                    <label className="editar-label editar-label--option input-group-text" htmlFor="inputGroupSelect02">Progreso</label>
                                    <select className=" form-select" id="inputGroupSelect02"  value={nuevoProgreso}
                                            onChange={(evento) => setNuevoProgreso(evento.target.value)}>
                                        <option value="">Cambia tu progreso...</option>
                                        <option value="Sin empezar">Sin empezar</option>
                                        <option value="Empezado">Empezado</option>
                                        <option value="Terminado">Terminado</option>
                                    </select>
                                </div>) 
                             : <p className="card-text fs-5"><strong>Progreso:</strong> {progreso}</p> }  
                    { editar ? "" : <h3 className="tarjeta-h3 fs-5 ">Reseña</h3>}  
                    { editar ? (<div className="editar-cuadros col-12 mt-1 mb-1">  
                                    <textarea className="editar-inputs form-control" placeholder="Todo el mundo puede cambiar de opinión...😉" id="floatingTextarea" value={nuevaOpinion}
                                    onChange={(evento) => setNuevaOpinion(evento.target.value)}></textarea> 
                                </div>) 
                            : <p className="tarjeta-texto scroll-vertical text-wrap card-text text-justify mb-3">{opinion}</p> }
                    
                    <div className="d-grid gap-1 mt-4 d-md-flex justify-content-md-end">
                        <button className="tarjeta-boton btn me-md-2" type="button"
                                onClick={() => {
                                    if(editar){
                                        funcionActualizarLibro()
                                    }else{
                                        setEditar(true)
                                    }

                                }}
                        >{ editar ? "Guardar" : "Editar"}</button>
                        <button className="tarjeta-boton tarjeta-boton--borrar btn" type="button" onClick={() => {
                                fetch("http://localhost:3000/api/libros/borrar/" + id, {
                                        method : "DELETE",
                                        
                                })
                                .then(respuesta => respuesta.json())
                                .then(({error, resultado}) => {
                                        if(!error && resultado == "ok"){
                                             return borrarLibro(id)   
                                        }
                                        console.log("...error al usuario")       
                                })
                        } }>Borrar</button>
                    </div>  
              </div>
      </section>

    </>
  )
}

export default Tarjeta;